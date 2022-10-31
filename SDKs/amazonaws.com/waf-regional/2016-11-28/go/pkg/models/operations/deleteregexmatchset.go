package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRegexMatchSetXAmzTargetEnum string

const (
	DeleteRegexMatchSetXAmzTargetEnumAwswafRegional20161128DeleteRegexMatchSet DeleteRegexMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteRegexMatchSet"
)

type DeleteRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRegexMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
