package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateByteMatchSetXAmzTargetEnum string

const (
	UpdateByteMatchSetXAmzTargetEnumAwswafRegional20161128UpdateByteMatchSet UpdateByteMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.UpdateByteMatchSet"
)

type UpdateByteMatchSetHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateByteMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
