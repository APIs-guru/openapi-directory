package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRegexMatchSetXAmzTargetEnum string

const (
	UpdateRegexMatchSetXAmzTargetEnumAwswaf20150824UpdateRegexMatchSet UpdateRegexMatchSetXAmzTargetEnum = "AWSWAF_20150824.UpdateRegexMatchSet"
)

type UpdateRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRegexMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRegexMatchSetRequest struct {
	Headers UpdateRegexMatchSetHeaders
	Request shared.UpdateRegexMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateRegexMatchSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateRegexMatchSetResponse      *shared.UpdateRegexMatchSetResponse
	WafDisallowedNameException       *interface{}
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafStaleDataException            *interface{}
}
