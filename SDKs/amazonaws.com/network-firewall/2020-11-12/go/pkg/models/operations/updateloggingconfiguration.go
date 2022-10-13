package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateLoggingConfigurationXAmzTargetEnum string

const (
	UpdateLoggingConfigurationXAmzTargetEnumNetworkFirewall20201112UpdateLoggingConfiguration UpdateLoggingConfigurationXAmzTargetEnum = "NetworkFirewall_20201112.UpdateLoggingConfiguration"
)

type UpdateLoggingConfigurationHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateLoggingConfigurationXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateLoggingConfigurationRequest struct {
	Headers UpdateLoggingConfigurationHeaders
	Request shared.UpdateLoggingConfigurationRequest `request:"mediaType=application/json"`
}

type UpdateLoggingConfigurationResponse struct {
	ContentType                        string
	InternalServerError                *interface{}
	InvalidRequestException            *interface{}
	InvalidTokenException              *interface{}
	LogDestinationPermissionException  *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	UpdateLoggingConfigurationResponse *shared.UpdateLoggingConfigurationResponse
}
