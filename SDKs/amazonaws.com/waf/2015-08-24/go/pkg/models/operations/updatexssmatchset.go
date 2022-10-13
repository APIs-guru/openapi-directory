package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateXSSMatchSetXAmzTargetEnum string

const (
	UpdateXSSMatchSetXAmzTargetEnumAwswaf20150824UpdateXSSMatchSet UpdateXSSMatchSetXAmzTargetEnum = "AWSWAF_20150824.UpdateXssMatchSet"
)

type UpdateXSSMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateXSSMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateXSSMatchSetRequest struct {
	Headers UpdateXSSMatchSetHeaders
	Request shared.UpdateXSSMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateXSSMatchSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateXSSMatchSetResponse        *shared.UpdateXSSMatchSetResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafStaleDataException            *interface{}
}
