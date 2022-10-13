package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRegexPatternSetXAmzTargetEnum string

const (
	UpdateRegexPatternSetXAmzTargetEnumAwswafRegional20161128UpdateRegexPatternSet UpdateRegexPatternSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateRegexPatternSet"
)

type UpdateRegexPatternSetHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRegexPatternSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateRegexPatternSetRequest struct {
	Headers UpdateRegexPatternSetHeaders
	Request shared.UpdateRegexPatternSetRequest `request:"mediaType=application/json"`
}

type UpdateRegexPatternSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateRegexPatternSetResponse    *shared.UpdateRegexPatternSetResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidRegexPatternException  *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafStaleDataException            *interface{}
}
