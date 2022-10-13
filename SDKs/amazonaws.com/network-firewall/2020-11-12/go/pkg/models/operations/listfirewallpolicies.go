package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallPoliciesQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallPoliciesXAmzTargetEnum string

const (
	ListFirewallPoliciesXAmzTargetEnumNetworkFirewall20201112ListFirewallPolicies ListFirewallPoliciesXAmzTargetEnum = "NetworkFirewall_20201112.ListFirewallPolicies"
)

type ListFirewallPoliciesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallPoliciesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListFirewallPoliciesRequest struct {
	QueryParams ListFirewallPoliciesQueryParams
	Headers     ListFirewallPoliciesHeaders
	Request     shared.ListFirewallPoliciesRequest `request:"mediaType=application/json"`
}

type ListFirewallPoliciesResponse struct {
	ContentType                  string
	InternalServerError          *interface{}
	InvalidRequestException      *interface{}
	ListFirewallPoliciesResponse *shared.ListFirewallPoliciesResponse
	StatusCode                   int64
	ThrottlingException          *interface{}
}
