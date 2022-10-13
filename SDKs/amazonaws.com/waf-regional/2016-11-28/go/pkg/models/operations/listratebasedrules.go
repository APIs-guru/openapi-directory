package operations

import (
	"openapi/pkg/models/shared"
)

type ListRateBasedRulesXAmzTargetEnum string

const (
	ListRateBasedRulesXAmzTargetEnumAwswafRegional20161128ListRateBasedRules ListRateBasedRulesXAmzTargetEnum = "AWSWAF_Regional_20161128.ListRateBasedRules"
)

type ListRateBasedRulesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRateBasedRulesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRateBasedRulesRequest struct {
	Headers ListRateBasedRulesHeaders
	Request shared.ListRateBasedRulesRequest `request:"mediaType=application/json"`
}

type ListRateBasedRulesResponse struct {
	ContentType                string
	ListRateBasedRulesResponse *shared.ListRateBasedRulesResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
