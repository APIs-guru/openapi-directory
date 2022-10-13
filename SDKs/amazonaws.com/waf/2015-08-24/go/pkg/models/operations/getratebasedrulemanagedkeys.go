package operations

import (
	"openapi/pkg/models/shared"
)

type GetRateBasedRuleManagedKeysXAmzTargetEnum string

const (
	GetRateBasedRuleManagedKeysXAmzTargetEnumAwswaf20150824GetRateBasedRuleManagedKeys GetRateBasedRuleManagedKeysXAmzTargetEnum = "AWSWAF_20150824.GetRateBasedRuleManagedKeys"
)

type GetRateBasedRuleManagedKeysHeaders struct {
	XAmzAlgorithm     *string                                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRateBasedRuleManagedKeysXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRateBasedRuleManagedKeysRequest struct {
	Headers GetRateBasedRuleManagedKeysHeaders
	Request shared.GetRateBasedRuleManagedKeysRequest `request:"mediaType=application/json"`
}

type GetRateBasedRuleManagedKeysResponse struct {
	ContentType                         string
	GetRateBasedRuleManagedKeysResponse *shared.GetRateBasedRuleManagedKeysResponse
	StatusCode                          int64
	WafInternalErrorException           *interface{}
	WafInvalidAccountException          *interface{}
	WafInvalidParameterException        *interface{}
	WafNonexistentItemException         *interface{}
}
