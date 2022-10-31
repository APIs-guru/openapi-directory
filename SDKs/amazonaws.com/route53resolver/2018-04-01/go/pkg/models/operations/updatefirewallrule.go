package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateFirewallRuleXAmzTargetEnum string

const (
	UpdateFirewallRuleXAmzTargetEnumRoute53ResolverUpdateFirewallRule UpdateFirewallRuleXAmzTargetEnum = "Route53Resolver.UpdateFirewallRule"
)

type UpdateFirewallRuleHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateFirewallRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
