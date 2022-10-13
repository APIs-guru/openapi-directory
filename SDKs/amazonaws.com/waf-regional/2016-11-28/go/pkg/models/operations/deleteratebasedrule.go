package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRateBasedRuleXAmzTargetEnum string

const (
	DeleteRateBasedRuleXAmzTargetEnumAwswafRegional20161128DeleteRateBasedRule DeleteRateBasedRuleXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteRateBasedRule"
)

type DeleteRateBasedRuleHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRateBasedRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRateBasedRuleRequest struct {
	Headers DeleteRateBasedRuleHeaders
	Request shared.DeleteRateBasedRuleRequest `request:"mediaType=application/json"`
}

type DeleteRateBasedRuleResponse struct {
	ContentType                           string
	DeleteRateBasedRuleResponse           *shared.DeleteRateBasedRuleResponse
	StatusCode                            int64
	WafInternalErrorException             *interface{}
	WafInvalidAccountException            *interface{}
	WafNonEmptyEntityException            *interface{}
	WafNonexistentItemException           *interface{}
	WafReferencedItemException            *interface{}
	WafStaleDataException                 *interface{}
	WafTagOperationException              *interface{}
	WafTagOperationInternalErrorException *interface{}
}
