package operations

import (
	"openapi/pkg/models/shared"
)

type CreateImportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateImportJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

type CreateImportJobRequestBodyImportJobRequest struct {
	DefineSegment     *bool              `json:"DefineSegment,omitempty"`
	ExternalID        *string            `json:"ExternalId,omitempty"`
	Format            *shared.FormatEnum `json:"Format,omitempty"`
	RegisterEndpoints *bool              `json:"RegisterEndpoints,omitempty"`
	RoleArn           *string            `json:"RoleArn,omitempty"`
	S3URL             *string            `json:"S3Url,omitempty"`
	SegmentID         *string            `json:"SegmentId,omitempty"`
	SegmentName       *string            `json:"SegmentName,omitempty"`
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
