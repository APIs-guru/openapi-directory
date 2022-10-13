package operations

import (
	"openapi/pkg/models/shared"
)

type GetRateBasedRuleXAmzTargetEnum string

const (
	GetRateBasedRuleXAmzTargetEnumAwswaf20150824GetRateBasedRule GetRateBasedRuleXAmzTargetEnum = "AWSWAF_20150824.GetRateBasedRule"
)

type GetRateBasedRuleHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRateBasedRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRateBasedRuleRequest struct {
	Headers GetRateBasedRuleHeaders
	Request shared.GetRateBasedRuleRequest `request:"mediaType=application/json"`
}

type GetRateBasedRuleResponse struct {
	ContentType                 string
	GetRateBasedRuleResponse    *shared.GetRateBasedRuleResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
