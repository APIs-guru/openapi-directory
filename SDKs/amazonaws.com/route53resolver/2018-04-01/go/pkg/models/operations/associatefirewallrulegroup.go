package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateFirewallRuleGroupXAmzTargetEnum string

const (
	AssociateFirewallRuleGroupXAmzTargetEnumRoute53ResolverAssociateFirewallRuleGroup AssociateFirewallRuleGroupXAmzTargetEnum = "Route53Resolver.AssociateFirewallRuleGroup"
)

type AssociateFirewallRuleGroupHeaders struct {
	XAmzAlgorithm     *string                                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateFirewallRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateFirewallRuleGroupRequest struct {
	Headers AssociateFirewallRuleGroupHeaders
	Request shared.AssociateFirewallRuleGroupRequest `request:"mediaType=application/json"`
}

type AssociateFirewallRuleGroupResponse struct {
	AccessDeniedException              *interface{}
	AssociateFirewallRuleGroupResponse *shared.AssociateFirewallRuleGroupResponse
	ConflictException                  *interface{}
	ContentType                        string
	InternalServiceErrorException      *interface{}
	LimitExceededException             *interface{}
	ResourceNotFoundException          *interface{}
	StatusCode                         int64
	ThrottlingException                *interface{}
	ValidationException                *interface{}
}
