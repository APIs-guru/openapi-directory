package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallRuleXAmzTargetEnum string

const (
	UpdateFirewallRuleXAmzTargetEnumRoute53ResolverUpdateFirewallRule UpdateFirewallRuleXAmzTargetEnum = "Route53Resolver.UpdateFirewallRule"
)

type UpdateFirewallRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateFirewallRuleRequest struct {
	Headers UpdateFirewallRuleHeaders
	Request shared.UpdateFirewallRuleRequest `request:"mediaType=application/json"`
}

type UpdateFirewallRuleResponse struct {
	AccessDeniedException         *interface{}
	ConflictException             *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	UpdateFirewallRuleResponse    *shared.UpdateFirewallRuleResponse
	ValidationException           *interface{}
}
