package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateRegexPatternSetXAmzTargetEnum string

const (
	UpdateRegexPatternSetXAmzTargetEnumAwswaf20150824UpdateRegexPatternSet UpdateRegexPatternSetXAmzTargetEnum = "AWSWAF_20150824.UpdateRegexPatternSet"
)

type UpdateRegexPatternSetHeaders struct {
	XAmzAlgorithm     *string                             `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                             `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                             `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                             `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                             `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                             `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                             `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateRegexPatternSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
