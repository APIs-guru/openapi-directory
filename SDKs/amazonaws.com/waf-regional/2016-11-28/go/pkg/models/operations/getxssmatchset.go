package operations

import (
	"openapi/pkg/models/shared"
)

type GetXSSMatchSetXAmzTargetEnum string

const (
	GetXSSMatchSetXAmzTargetEnumAwswafRegional20161128GetXSSMatchSet GetXSSMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetXssMatchSet"
)

type GetXSSMatchSetHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetXSSMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetXSSMatchSetRequest struct {
	Headers GetXSSMatchSetHeaders
	Request shared.GetXSSMatchSetRequest `request:"mediaType=application/json"`
}

type GetXSSMatchSetResponse struct {
	ContentType                 string
	GetXSSMatchSetResponse      *shared.GetXSSMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
