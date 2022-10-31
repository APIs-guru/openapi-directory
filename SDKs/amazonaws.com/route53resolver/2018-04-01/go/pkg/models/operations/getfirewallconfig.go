package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallConfigXAmzTargetEnum string

const (
	GetFirewallConfigXAmzTargetEnumRoute53ResolverGetFirewallConfig GetFirewallConfigXAmzTargetEnum = "Route53Resolver.GetFirewallConfig"
)

type GetFirewallConfigHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFirewallConfigXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetFirewallConfigRequest struct {
	Headers GetFirewallConfigHeaders
	Request shared.GetFirewallConfigRequest `request:"mediaType=application/json"`
}

type GetFirewallConfigResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	GetFirewallConfigResponse     *shared.GetFirewallConfigResponse
	InternalServiceErrorException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
