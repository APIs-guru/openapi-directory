package operations

import (
	"openapi/pkg/models/shared"
)

type PutFirewallRuleGroupPolicyXAmzTargetEnum string

const (
	PutFirewallRuleGroupPolicyXAmzTargetEnumRoute53ResolverPutFirewallRuleGroupPolicy PutFirewallRuleGroupPolicyXAmzTargetEnum = "Route53Resolver.PutFirewallRuleGroupPolicy"
)

type PutFirewallRuleGroupPolicyHeaders struct {
	XAmzAlgorithm     *string                                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        PutFirewallRuleGroupPolicyXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type PutFirewallRuleGroupPolicyRequest struct {
	Headers PutFirewallRuleGroupPolicyHeaders
	Request shared.PutFirewallRuleGroupPolicyRequest `request:"mediaType=application/json"`
}

type PutFirewallRuleGroupPolicyResponse struct {
	AccessDeniedException              *interface{}
	ContentType                        string
	InternalServiceErrorException      *interface{}
	PutFirewallRuleGroupPolicyResponse *shared.PutFirewallRuleGroupPolicyResponse
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
