package operations

import (
	"openapi/pkg/models/shared"
)

type ListRegexMatchSetsXAmzTargetEnum string

const (
	ListRegexMatchSetsXAmzTargetEnumAwswaf20150824ListRegexMatchSets ListRegexMatchSetsXAmzTargetEnum = "AWSWAF_20150824.ListRegexMatchSets"
)

type ListRegexMatchSetsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListRegexMatchSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
