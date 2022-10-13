package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteByteMatchSetXAmzTargetEnum string

const (
	DeleteByteMatchSetXAmzTargetEnumAwswafRegional20161128DeleteByteMatchSet DeleteByteMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteByteMatchSet"
)

type DeleteByteMatchSetHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteByteMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteByteMatchSetRequest struct {
	Headers DeleteByteMatchSetHeaders
	Request shared.DeleteByteMatchSetRequest `request:"mediaType=application/json"`
}

type DeleteByteMatchSetResponse struct {
	ContentType                 string
	DeleteByteMatchSetResponse  *shared.DeleteByteMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonEmptyEntityException  *interface{}
	WafNonexistentItemException *interface{}
	WafReferencedItemException  *interface{}
	WafStaleDataException       *interface{}
}
