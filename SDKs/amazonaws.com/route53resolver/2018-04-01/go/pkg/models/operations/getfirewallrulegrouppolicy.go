package operations

import (
	"openapi/pkg/models/shared"
)

type GetFirewallRuleGroupPolicyXAmzTargetEnum string

const (
	GetFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverGetFirewallRuleGroupPolicy GetFirewallRuleGroupPolicyXAmzTargetEnum = "Route53Resolver.GetFirewallRuleGroupPolicy"
)

type GetFirewallRuleGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetFirewallRuleGroupPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetFirewallRuleGroupPolicyRequest struct {
	Headers GetFirewallRuleGroupPolicyHeaders
	Request shared.GetFirewallRuleGroupPolicyRequest `request:"mediaType=application/json"`
}

type GetFirewallRuleGroupPolicyResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	GetFirewallRuleGroupPolicyResponse *shared.GetFirewallRuleGroupPolicyResponse
	InternalServiceErrorException      *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
