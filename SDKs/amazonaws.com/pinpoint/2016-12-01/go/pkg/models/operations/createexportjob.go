package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateExportJobHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type CreateExportJobRequestBodyExportJobRequest struct {
	RoleArn        *string `json:"RoleArn,omitempty"`
	S3URLPrefix    *string `json:"S3UrlPrefix,omitempty"`
	SegmentID      *string `json:"SegmentId,omitempty"`
	SegmentVersion *int64  `json:"SegmentVersion,omitempty"`
}

type CreateExportJobRequestBody struct {
	ExportJobRequest CreateExportJobRequestBodyExportJobRequest `json:"ExportJobRequest"`
}

type CreateExportJobRequest struct {
	PathParams CreateExportJobPathParams
	Headers    CreateExportJobHeaders
	Request    CreateExportJobRequestBody `request:"mediaType=application/json"`
}

type CreateExportJobResponse struct {
	BadRequestException          *interface{}
	ContentType                  string
	CreateExportJobResponse      *shared.CreateExportJobResponse
	ForbiddenException           *interface{}
	InternalServerErrorException *interface{}
	MethodNotAllowedException    *interface{}
	NotFoundException            *interface{}
	PayloadTooLargeException     *interface{}
	StatusCode                   int64
	TooManyRequestsException     *interface{}
}
