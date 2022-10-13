package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallDomainListsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallDomainListsXAmzTargetEnum string

const (
	ListFirewallDomainListsXAmzTargetEnumRoute53ResolverListFirewallDomainLists ListFirewallDomainListsXAmzTargetEnum = "Route53Resolver.ListFirewallDomainLists"
)

type ListFirewallDomainListsHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallDomainListsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFirewallDomainListsRequest struct {
	QueryParams ListFirewallDomainListsQueryParams
	Headers     ListFirewallDomainListsHeaders
	Request     shared.ListFirewallDomainListsRequest `request:"mediaType=application/json"`
}

type ListFirewallDomainListsResponse struct {
	AccessDeniedException           *interface{}
	ContentType                     string
	InternalServiceErrorException   *interface{}
	ListFirewallDomainListsResponse *shared.ListFirewallDomainListsResponse
	StatusCode                      int64
	ThrottlingException             *interface{}
	ValidationException             *interface{}
}
