package operations

import (
	"openapi/pkg/models/shared"
)

type ListFirewallsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListFirewallsXAmzTargetEnum string

const (
	ListFirewallsXAmzTargetEnumNetworkFirewall20201112ListFirewalls ListFirewallsXAmzTargetEnum = "NetworkFirewall_20201112.ListFirewalls"
)

type ListFirewallsHeaders struct {
	XAmzAlgorithm     *string                     `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListFirewallsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListFirewallsRequest struct {
	QueryParams ListFirewallsQueryParams
	Headers     ListFirewallsHeaders
	Request     shared.ListFirewallsRequest `request:"mediaType=application/json"`
}

type ListFirewallsResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	ListFirewallsResponse   *shared.ListFirewallsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
}
