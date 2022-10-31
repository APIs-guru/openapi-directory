package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallRuleGroupXAmzTargetEnum string

const (
	DeleteFirewallRuleGroupXAmzTargetEnumRoute53ResolverDeleteFirewallRuleGroup DeleteFirewallRuleGroupXAmzTargetEnum = "Route53Resolver.DeleteFirewallRuleGroup"
)

type DeleteFirewallRuleGroupHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFirewallRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteFirewallRuleGroupRequest struct {
	Headers DeleteFirewallRuleGroupHeaders
	Request shared.DeleteFirewallRuleGroupRequest `request:"mediaType=application/json"`
}

type DeleteFirewallRuleGroupResponse struct {
	AccessDeniedException           *interface{}
	ConflictException               *interface{}
	ContentType                     string
	DeleteFirewallRuleGroupResponse *shared.DeleteFirewallRuleGroupResponse
	InternalServiceErrorException   *interface{}
	ResourceNotFoundException       *interface{}
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
