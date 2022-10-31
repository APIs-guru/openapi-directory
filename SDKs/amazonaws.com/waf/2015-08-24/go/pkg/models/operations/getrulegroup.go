package operations

import (
	"openapi/pkg/models/shared"
)

type GetRuleGroupXAmzTargetEnum string

const (
	GetRuleGroupXAmzTargetEnumAwswaf20150824GetRuleGroup GetRuleGroupXAmzTargetEnum = "AWSWAF_20150824.GetRuleGroup"
)

type GetRuleGroupHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRuleGroupXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
