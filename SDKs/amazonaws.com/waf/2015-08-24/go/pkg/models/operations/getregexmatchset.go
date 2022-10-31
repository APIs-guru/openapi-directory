package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegexMatchSetXAmzTargetEnum string

const (
	GetRegexMatchSetXAmzTargetEnumAwswaf20150824GetRegexMatchSet GetRegexMatchSetXAmzTargetEnum = "AWSWAF_20150824.GetRegexMatchSet"
)

type GetRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegexMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
