package operations

import (
	"openapi/pkg/models/shared"
)

type GetSampleDataHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetSampleDataRequestBodyS3SourceConfig struct {
	FileFormatDescriptor   *shared.FileFormatDescriptor `json:"FileFormatDescriptor,omitempty"`
	HistoricalDataPathList []string                     `json:"HistoricalDataPathList,omitempty"`
	RoleArn                *string                      `json:"RoleArn,omitempty"`
	TemplatedPathList      []string                     `json:"TemplatedPathList,omitempty"`
}

type GetSampleDataRequestBody struct {
	S3SourceConfig *GetSampleDataRequestBodyS3SourceConfig `json:"S3SourceConfig,omitempty"`
}

type GetSampleDataRequest struct {
	Headers GetSampleDataHeaders
	Request GetSampleDataRequestBody `request:"mediaType=application/json"`
}

type GetSampleDataResponse struct {
	AccessDeniedException     *interface{}
	ContentType               string
	GetSampleDataResponse     *shared.GetSampleDataResponse
	InternalServerException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	TooManyRequestsException  *interface{}
	ValidationException       *interface{}
}
