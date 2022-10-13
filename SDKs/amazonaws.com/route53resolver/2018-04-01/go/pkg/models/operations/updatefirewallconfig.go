package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallConfigXAmzTargetEnum string

const (
	UpdateFirewallConfigXAmzTargetEnumRoute53ResolverUpdateFirewallConfig UpdateFirewallConfigXAmzTargetEnum = "Route53Resolver.UpdateFirewallConfig"
)

type UpdateFirewallConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallConfigXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallConfigRequest struct {
	Headers UpdateFirewallConfigHeaders
	Request shared.UpdateFirewallConfigRequest `request:"mediaType=application/json"`
}

type UpdateFirewallConfigResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateFirewallConfigResponse  *shared.UpdateFirewallConfigResponse
	ValidationException           *interface{}
}
