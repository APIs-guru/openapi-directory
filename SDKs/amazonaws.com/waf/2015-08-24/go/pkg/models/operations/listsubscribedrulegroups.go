package operations

import (
	"openapi/pkg/models/shared"
)

type ListSubscribedRuleGroupsXAmzTargetEnum string

const (
	ListSubscribedRuleGroupsXAmzTargetEnumAwswaf20150824ListSubscribedRuleGroups ListSubscribedRuleGroupsXAmzTargetEnum = "AWSWAF_20150824.ListSubscribedRuleGroups"
)

type ListSubscribedRuleGroupsHeaders struct {
	XAmzAlgorithm     *string                                `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListSubscribedRuleGroupsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListSubscribedRuleGroupsRequest struct {
	Headers ListSubscribedRuleGroupsHeaders
	Request shared.ListSubscribedRuleGroupsRequest `request:"mediaType=application/json"`
}

type ListSubscribedRuleGroupsResponse struct {
	ContentType                      string
	ListSubscribedRuleGroupsResponse *shared.ListSubscribedRuleGroupsResponse
	StatusCode                       int64
	WafInternalErrorException        *interface{}
	WafNonexistentItemException      *interface{}
}
