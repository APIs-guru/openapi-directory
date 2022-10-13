package operations

import (
	"openapi/pkg/models/shared"
)

type GetRegexPatternSetXAmzTargetEnum string

const (
	GetRegexPatternSetXAmzTargetEnumAwswaf20150824GetRegexPatternSet GetRegexPatternSetXAmzTargetEnum = "AWSWAF_20150824.GetRegexPatternSet"
)

type GetRegexPatternSetHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetRegexPatternSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetRegexPatternSetRequest struct {
	Headers GetRegexPatternSetHeaders
	Request shared.GetRegexPatternSetRequest `request:"mediaType=application/json"`
}

type GetRegexPatternSetResponse struct {
	ContentType                 string
	GetRegexPatternSetResponse  *shared.GetRegexPatternSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
