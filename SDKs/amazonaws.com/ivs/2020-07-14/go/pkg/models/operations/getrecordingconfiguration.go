package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecordingConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetRecordingConfigurationRequestBody struct {
	Arn string `json:"arn"`
}

type GetRecordingConfigurationRequest struct {
	Headers GetRecordingConfigurationHeaders
	Request GetRecordingConfigurationRequestBody `request:"mediaType=application/json"`
}

type GetRecordingConfigurationResponse struct {
	AccessDeniedException             *interface{}
	ContentType                       string
	GetRecordingConfigurationResponse *shared.GetRecordingConfigurationResponse
	InternalServerException           *interface{}
	ResourceNotFoundException         *interface{}
	StatusCode                        int64
	ValidationException               *interface{}
}
