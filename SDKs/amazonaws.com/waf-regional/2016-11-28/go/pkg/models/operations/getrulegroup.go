package operations

import (
	"openapi/pkg/models/shared"
)

type GetRuleGroupXAmzTargetEnum string

const (
	GetRuleGroupXAmzTargetEnumAwswafRegional20161128GetRuleGroup GetRuleGroupXAmzTargetEnum = "AWSWAF_Regional_20161128.GetRuleGroup"
)

type GetRuleGroupHeaders struct {
	XAmzAlgorithm     *string                    `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRuleGroupXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRuleGroupRequest struct {
	Headers GetRuleGroupHeaders
	Request shared.GetRuleGroupRequest `request:"mediaType=application/json"`
}

type GetRuleGroupResponse struct {
	ContentType                 string
	GetRuleGroupResponse        *shared.GetRuleGroupResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafNonexistentItemException *interface{}
}
