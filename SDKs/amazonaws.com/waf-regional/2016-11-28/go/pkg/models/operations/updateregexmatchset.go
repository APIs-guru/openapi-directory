package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRegexMatchSetXAmzTargetEnum string

const (
	UpdateRegexMatchSetXAmzTargetEnumAwswafRegional20161128UpdateRegexMatchSet UpdateRegexMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateRegexMatchSet"
)

type UpdateRegexMatchSetHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRegexMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateRegexMatchSetRequest struct {
	Headers UpdateRegexMatchSetHeaders
	Request shared.UpdateRegexMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateRegexMatchSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateRegexMatchSetResponse      *shared.UpdateRegexMatchSetResponse
	WafDisallowedNameException       *interface{}
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafStaleDataException            *interface{}
}
