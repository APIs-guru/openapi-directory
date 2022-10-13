package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateImportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateImportJobRequestBodyImportJobRequest struct {
	DefineSegment     *bool              `json:"DefineSegment"`
	ExternalID        *string            `json:"ExternalId"`
	Format            *shared.FormatEnum `json:"Format"`
	RegisterEndpoints *bool              `json:"RegisterEndpoints"`
	RoleArn           *string            `json:"RoleArn"`
	S3URL             *string            `json:"S3Url"`
	SegmentID         *string            `json:"SegmentId"`
	SegmentName       *string            `json:"SegmentName"`
}

type CreateImportJobRequestBody struct {
	ImportJobRequest CreateImportJobRequestBodyImportJobRequest `json:"ImportJobRequest"`
}

type CreateImportJobRequest struct {
	PathParams CreateImportJobPathParams
	Headers    CreateImportJobHeaders
	Request    CreateImportJobRequestBody `request:"mediaType=application/json"`
}

type CreateImportJobResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateImportJobResponse      *shared.CreateImportJobResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
