package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteXSSMatchSetXAmzTargetEnum string

const (
	DeleteXSSMatchSetXAmzTargetEnumAwswafRegional20161128DeleteXSSMatchSet DeleteXSSMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteXssMatchSet"
)

type DeleteXSSMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteXSSMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteXSSMatchSetRequest struct {
	Headers DeleteXSSMatchSetHeaders
	Request shared.DeleteXSSMatchSetRequest `request:"mediaType=application/json"`
}

type DeleteXSSMatchSetResponse struct {
	ContentType                 string
	DeleteXSSMatchSetResponse   *shared.DeleteXSSMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonEmptyEntityException  *interface{}
	WafNonexistentItemException *interface{}
	WafReferencedItemException  *interface{}
	WafStaleDataException       *interface{}
}
