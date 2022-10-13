package operations

import (
	"openapi/pkg/models/shared"
)

type ListRuleGroupsXAmzTargetEnum string

const (
	ListRuleGroupsXAmzTargetEnumAwswaf20150824ListRuleGroups ListRuleGroupsXAmzTargetEnum = "AWSWAF_20150824.ListRuleGroups"
)

type ListRuleGroupsHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRuleGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRuleGroupsRequest struct {
	Headers ListRuleGroupsHeaders
	Request shared.ListRuleGroupsRequest `request:"mediaType=application/json"`
}

type ListRuleGroupsResponse struct {
	ContentType               string
	ListRuleGroupsResponse    *shared.ListRuleGroupsResponse
	StatusCode                int64
	WafInternalErrorException *interface{}
}
