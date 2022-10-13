package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteRegexPatternSetXAmzTargetEnum string

const (
	DeleteRegexPatternSetXAmzTargetEnumAwswaf20150824DeleteRegexPatternSet DeleteRegexPatternSetXAmzTargetEnum = "AWSWAF_20150824.DeleteRegexPatternSet"
)

type DeleteRegexPatternSetHeaders struct {
	XAmzAlgorithm     *string                             `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteRegexPatternSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteRegexPatternSetRequest struct {
	Headers DeleteRegexPatternSetHeaders
	Request shared.DeleteRegexPatternSetRequest `request:"mediaType=application/json"`
}

type DeleteRegexPatternSetResponse struct {
	ContentType                   string
	DeleteRegexPatternSetResponse *shared.DeleteRegexPatternSetResponse
	StatusCode                    int64
	WafInternalErrorException     *interface{}
	WafInvalidAccountException    *interface{}
	WafNonEmptyEntityException    *interface{}
	WafNonexistentItemException   *interface{}
	WafReferencedItemException    *interface{}
	WafStaleDataException         *interface{}
}
