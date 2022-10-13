package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRuleXAmzTargetEnum string

const (
	UpdateRuleXAmzTargetEnumAwswafRegional20161128UpdateRule UpdateRuleXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateRule"
)

type UpdateRuleHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRuleXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRuleRequest struct {
	Headers UpdateRuleHeaders
	Request shared.UpdateRuleRequest `request:"mediaType=application/json"`
}

type UpdateRuleResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateRuleResponse               *shared.UpdateRuleResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafReferencedItemException       *interface{}
	WafStaleDataException            *interface{}
}
