package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRateBasedRuleXAmzTargetEnum string

const (
	DeleteRateBasedRuleXAmzTargetEnumAwswaf20150824DeleteRateBasedRule DeleteRateBasedRuleXAmzTargetEnum = "AWSWAF_20150824.DeleteRateBasedRule"
)

type DeleteRateBasedRuleHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRateBasedRuleXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
