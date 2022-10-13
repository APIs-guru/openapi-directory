package operations

import (
	"openapi/pkg/models/shared"
)

type GetByteMatchSetXAmzTargetEnum string

const (
	GetByteMatchSetXAmzTargetEnumAwswafRegional20161128GetByteMatchSet GetByteMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetByteMatchSet"
)

type GetByteMatchSetHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetByteMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetByteMatchSetRequest struct {
	Headers GetByteMatchSetHeaders
	Request shared.GetByteMatchSetRequest `request:"mediaType=application/json"`
}

type GetByteMatchSetResponse struct {
	ContentType                 string
	GetByteMatchSetResponse     *shared.GetByteMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
