package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallConfigXAmzTargetEnum string

const (
	UpdateFirewallConfigXAmzTargetEnumRoute53ResolverUpdateFirewallConfig UpdateFirewallConfigXAmzTargetEnum = "Route53Resolver.UpdateFirewallConfig"
)

type UpdateFirewallConfigHeaders struct {
	XAmzAlgorithm     *string                            `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
