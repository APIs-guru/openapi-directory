package operations

import (
	"openapi/pkg/models/shared"
)

type CreateExportJobPathParams struct {
	ApplicationID string `pathParam:"style=simple,explode=false,name=application-id"`
}

type CreateExportJobHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
}

// CreateExportJobRequestBodyExportJobRequest
// Specifies the settings for a job that exports endpoint definitions to an Amazon Simple Storage Service (Amazon S3) bucket.
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
