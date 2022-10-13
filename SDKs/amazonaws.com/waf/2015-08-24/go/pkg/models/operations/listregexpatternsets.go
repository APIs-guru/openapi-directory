package operations

import (
	"openapi/pkg/models/shared"
)

type ListRegexPatternSetsXAmzTargetEnum string

const (
	ListRegexPatternSetsXAmzTargetEnumAwswaf20150824ListRegexPatternSets ListRegexPatternSetsXAmzTargetEnum = "AWSWAF_20150824.ListRegexPatternSets"
)

type ListRegexPatternSetsHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRegexPatternSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRegexPatternSetsRequest struct {
	Headers ListRegexPatternSetsHeaders
	Request shared.ListRegexPatternSetsRequest `request:"mediaType=application/json"`
}

type ListRegexPatternSetsResponse struct {
	ContentType                  string
	ListRegexPatternSetsResponse *shared.ListRegexPatternSetsResponse
	StatusCode                   int64
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
}
