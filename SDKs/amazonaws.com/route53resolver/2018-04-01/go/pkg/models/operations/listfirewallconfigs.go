package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallConfigsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallConfigsXAmzTargetEnum string

const (
	ListFirewallConfigsXAmzTargetEnumRoute53ResolverListFirewallConfigs ListFirewallConfigsXAmzTargetEnum = "Route53Resolver.ListFirewallConfigs"
)

type ListFirewallConfigsHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallConfigsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFirewallConfigsRequest struct {
	QueryParams ListFirewallConfigsQueryParams
	Headers     ListFirewallConfigsHeaders
	Request     shared.ListFirewallConfigsRequest `request:"mediaType=application/json"`
}

type ListFirewallConfigsResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	InternalServiceErrorException *interface{}
	ListFirewallConfigsResponse   *shared.ListFirewallConfigsResponse
	StatusCode                    int64
	ThrottlingException           *interface{}
	ValidationException           *interface{}
}
