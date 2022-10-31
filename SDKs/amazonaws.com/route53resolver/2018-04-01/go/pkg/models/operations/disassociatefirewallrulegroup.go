package operations

import (
	"openapi/pkg/models/shared"
)

type DisassociateFirewallRuleGroupXAmzTargetEnum string

const (
	DisassociateFirewallRuleGroupXAmzTargetEnumRoute53ResolverDisassociateFirewallRuleGroup DisassociateFirewallRuleGroupXAmzTargetEnum = "Route53Resolver.DisassociateFirewallRuleGroup"
)

type DisassociateFirewallRuleGroupHeaders struct {
	XAmzAlgorithm     *string                                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DisassociateFirewallRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DisassociateFirewallRuleGroupRequest struct {
	Headers DisassociateFirewallRuleGroupHeaders
	Request shared.DisassociateFirewallRuleGroupRequest `request:"mediaType=application/json"`
}

type DisassociateFirewallRuleGroupResponse struct {
	AccessDeniedException                 *interface{}
	ConflictException                     *interface{}
	ContentType                           string
	DisassociateFirewallRuleGroupResponse *shared.DisassociateFirewallRuleGroupResponse
	InternalServiceErrorException         *interface{}
	ResourceNotFoundException             *interface{}
	StatusCode                            int64
	ThrottlingException                   *interface{}
	ValidationException                   *interface{}
}
