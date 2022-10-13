package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateByteMatchSetXAmzTargetEnum string

const (
	UpdateByteMatchSetXAmzTargetEnumAwswaf20150824UpdateByteMatchSet UpdateByteMatchSetXAmzTargetEnum = "AWSWAF_20150824.UpdateByteMatchSet"
)

type UpdateByteMatchSetHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateByteMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateByteMatchSetRequest struct {
	Headers UpdateByteMatchSetHeaders
	Request shared.UpdateByteMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateByteMatchSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateByteMatchSetResponse       *shared.UpdateByteMatchSetResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafStaleDataException            *interface{}
}
