package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRegexMatchSetXAmzTargetEnum string

const (
	DeleteRegexMatchSetXAmzTargetEnumAwswaf20150824DeleteRegexMatchSet DeleteRegexMatchSetXAmzTargetEnum = "AWSWAF_20150824.DeleteRegexMatchSet"
)

type DeleteRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRegexMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRegexMatchSetRequest struct {
	Headers DeleteRegexMatchSetHeaders
	Request shared.DeleteRegexMatchSetRequest `request:"mediaType=application/json"`
}

type DeleteRegexMatchSetResponse struct {
	ContentType                 string
	DeleteRegexMatchSetResponse *shared.DeleteRegexMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonEmptyEntityException  *interface{}
	WafNonexistentItemException *interface{}
	WafReferencedItemException  *interface{}
	WafStaleDataException       *interface{}
}
