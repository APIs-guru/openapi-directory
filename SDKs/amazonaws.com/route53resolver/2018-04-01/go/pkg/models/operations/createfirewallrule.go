package operations

import (
	"openapi/pkg/models/shared"
)

type CreateFirewallRuleXAmzTargetEnum string

const (
	CreateFirewallRuleXAmzTargetEnumRoute53ResolverCreateFirewallRule CreateFirewallRuleXAmzTargetEnum = "Route53Resolver.CreateFirewallRule"
)

type CreateFirewallRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateFirewallRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateFirewallRuleRequest struct {
	Headers CreateFirewallRuleHeaders
	Request shared.CreateFirewallRuleRequest `request:"mediaType=application/json"`
}

type CreateFirewallRuleResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	CreateFirewallRuleResponse    *shared.CreateFirewallRuleResponse
	InternalServiceErrorException *interface{}
	LimitExceededException        *interface{}
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
