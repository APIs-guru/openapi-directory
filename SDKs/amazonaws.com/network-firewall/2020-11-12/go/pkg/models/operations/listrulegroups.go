package operations

import (
	"openapi/pkg/models/shared"
)

type ListRuleGroupsQueryParams struct {
	MaxResults *string `queryParam:"style=form,explode=true,name=MaxResults"`
	NextToken  *string `queryParam:"style=form,explode=true,name=NextToken"`
}

type ListRuleGroupsXAmzTargetEnum string

const (
	ListRuleGroupsXAmzTargetEnumNetworkFirewall20201112ListRuleGroups ListRuleGroupsXAmzTargetEnum = "NetworkFirewall_20201112.ListRuleGroups"
)

type ListRuleGroupsHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRuleGroupsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListRuleGroupsRequest struct {
	QueryParams ListRuleGroupsQueryParams
	Headers     ListRuleGroupsHeaders
	Request     shared.ListRuleGroupsRequest `request:"mediaType=application/json"`
}

type ListRuleGroupsResponse struct {
	ContentType             string
	InternalServerError     *interface{}
	InvalidRequestException *interface{}
	ListRuleGroupsResponse  *shared.ListRuleGroupsResponse
	StatusCode              int64
	ThrottlingException     *interface{}
}
