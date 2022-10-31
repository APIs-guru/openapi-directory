package operations

import (
	"openapi/pkg/models/shared"
)

type CreateRegexMatchSetXAmzTargetEnum string

const (
	CreateRegexMatchSetXAmzTargetEnumAwswaf20150824CreateRegexMatchSet CreateRegexMatchSetXAmzTargetEnum = "AWSWAF_20150824.CreateRegexMatchSet"
)

type CreateRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateRegexMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
