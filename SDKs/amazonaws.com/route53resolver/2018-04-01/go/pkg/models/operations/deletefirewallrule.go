package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteFirewallRuleXAmzTargetEnum string

const (
	DeleteFirewallRuleXAmzTargetEnumRoute53ResolverDeleteFirewallRule DeleteFirewallRuleXAmzTargetEnum = "Route53Resolver.DeleteFirewallRule"
)

type DeleteFirewallRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteFirewallRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteFirewallRuleRequest struct {
	Headers DeleteFirewallRuleHeaders
	Request shared.DeleteFirewallRuleRequest `request:"mediaType=application/json"`
}

type DeleteFirewallRuleResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	DeleteFirewallRuleResponse    *shared.DeleteFirewallRuleResponse
	InternalServiceErrorException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
}
