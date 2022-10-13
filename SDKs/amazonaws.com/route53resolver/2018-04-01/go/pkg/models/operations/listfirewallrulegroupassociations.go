package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallRuleGroupAssociationsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallRuleGroupAssociationsXAmzTargetEnum string

const (
	ListFirewallRuleGroupAssociationsXAmzTargetEnumRoute53ResolverListFirewallRuleGroupAssociations ListFirewallRuleGroupAssociationsXAmzTargetEnum = "Route53Resolver.ListFirewallRuleGroupAssociations"
)

type ListFirewallRuleGroupAssociationsHeaders struct {
	XAmzAlgorithm     *string                                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallRuleGroupAssociationsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFirewallRuleGroupAssociationsRequest struct {
	QueryParams ListFirewallRuleGroupAssociationsQueryParams
	Headers     ListFirewallRuleGroupAssociationsHeaders
	Request     shared.ListFirewallRuleGroupAssociationsRequest `request:"mediaType=application/json"`
}

type ListFirewallRuleGroupAssociationsResponse struct {
	AccessDeniedException                     *interface{}
	ContentType                               string
	InternalServiceErrorException             *interface{}
	ListFirewallRuleGroupAssociationsResponse *shared.ListFirewallRuleGroupAssociationsResponse
	StatusCode                                int64
	ThrottlingException                       *interface{}
	ValidationException                       *interface{}
}
