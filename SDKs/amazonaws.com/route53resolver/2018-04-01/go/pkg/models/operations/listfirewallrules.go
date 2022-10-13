package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallRulesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallRulesXAmzTargetEnum string

const (
	ListFirewallRulesXAmzTargetEnumRoute53ResolverListFirewallRules ListFirewallRulesXAmzTargetEnum = "Route53Resolver.ListFirewallRules"
)

type ListFirewallRulesHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFirewallRulesRequest struct {
	QueryParams ListFirewallRulesQueryParams
	Headers     ListFirewallRulesHeaders
	Request     shared.ListFirewallRulesRequest `request:"mediaType=application/json"`
}

type ListFirewallRulesResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	ListFirewallRulesResponse     *shared.ListFirewallRulesResponse
	ResourceNotFoundException     *interface{}
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
