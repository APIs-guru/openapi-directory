package operations

import (
	"openapi/pkg/models/shared"
)

type ListRegexMatchSetsXAmzTargetEnum string

const (
	ListRegexMatchSetsXAmzTargetEnumAwswafRegional20161128ListRegexMatchSets ListRegexMatchSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListRegexMatchSets"
)

type ListRegexMatchSetsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRegexMatchSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListRegexMatchSetsRequest struct {
	Headers ListRegexMatchSetsHeaders
	Request shared.ListRegexMatchSetsRequest `request:"mediaType=application/json"`
}

type ListRegexMatchSetsResponse struct {
	ContentType                string
	ListRegexMatchSetsResponse *shared.ListRegexMatchSetsResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
