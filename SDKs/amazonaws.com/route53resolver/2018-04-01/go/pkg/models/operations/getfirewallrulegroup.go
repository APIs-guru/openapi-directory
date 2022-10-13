package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallRuleGroupXAmzTargetEnum string

const (
	GetFirewallRuleGroupXAmzTargetEnumRoute53ResolverGetFirewallRuleGroup GetFirewallRuleGroupXAmzTargetEnum = "Route53Resolver.GetFirewallRuleGroup"
)

type GetFirewallRuleGroupHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFirewallRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFirewallRuleGroupRequest struct {
	Headers GetFirewallRuleGroupHeaders
	Request shared.GetFirewallRuleGroupRequest `request:"mediaType=application/json"`
}

type GetFirewallRuleGroupResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	GetFirewallRuleGroupResponse  *shared.GetFirewallRuleGroupResponse
	InternalServiceErrorException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
