package operations

import (
	"openapi/pkg/models/shared"
)

type GetLaunchConfigurationHeaders struct {
	XAmzAlgorithm     *string `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
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
