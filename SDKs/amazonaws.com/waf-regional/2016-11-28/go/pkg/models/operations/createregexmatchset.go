package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRegexMatchSetXAmzTargetEnum string

const (
	CreateRegexMatchSetXAmzTargetEnumAwswafRegional20161128CreateRegexMatchSet CreateRegexMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateRegexMatchSet"
)

type CreateRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRegexMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateRegexMatchSetRequest struct {
	Headers CreateRegexMatchSetHeaders
	Request shared.CreateRegexMatchSetRequest `request:"mediaType=application/json"`
}

type CreateRegexMatchSetResponse struct {
	ContentType                 string
	CreateRegexMatchSetResponse *shared.CreateRegexMatchSetResponse
	StatusCode                  int64
	WafDisallowedNameException  *interface{}
	WafInternalErrorException   *interface{}
	WafLimitsExceededException  *interface{}
	WafStaleDataException       *interface{}
}
