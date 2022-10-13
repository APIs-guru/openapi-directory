package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegexMatchSetXAmzTargetEnum string

const (
	GetRegexMatchSetXAmzTargetEnumAwswafRegional20161128GetRegexMatchSet GetRegexMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetRegexMatchSet"
)

type GetRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegexMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRegexMatchSetRequest struct {
	Headers GetRegexMatchSetHeaders
	Request shared.GetRegexMatchSetRequest `request:"mediaType=application/json"`
}

type GetRegexMatchSetResponse struct {
	ContentType                 string
	GetRegexMatchSetResponse    *shared.GetRegexMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
