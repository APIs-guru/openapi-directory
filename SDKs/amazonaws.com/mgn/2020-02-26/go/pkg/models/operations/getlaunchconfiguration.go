package operations

import (
	"openapi/pkg/models/shared"
)

type GetLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"name=X-Amz-Credential"`
	XAmzDate          *string `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"name=X-Amz-SignedHeaders"`
}

type GetLaunchConfigurationRequestBody struct {
	SourceServerID string `json:"sourceServerID"`
}

type GetLaunchConfigurationRequest struct {
	Headers GetLaunchConfigurationHeaders
	Request GetLaunchConfigurationRequestBody `request:"mediaType=application/json"`
}

type GetLaunchConfigurationResponse struct {
	ContentType                   string
	LaunchConfiguration           *shared.LaunchConfiguration
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	UninitializedAccountException *interface{}
}
