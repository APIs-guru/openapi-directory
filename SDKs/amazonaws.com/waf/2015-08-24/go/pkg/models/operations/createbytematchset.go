package operations

import (
	"openapi/pkg/models/shared"
)

type CreateByteMatchSetXAmzTargetEnum string

const (
	CreateByteMatchSetXAmzTargetEnumAwswaf20150824CreateByteMatchSet CreateByteMatchSetXAmzTargetEnum = "AWSWAF_20150824.CreateByteMatchSet"
)

type CreateByteMatchSetHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateByteMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateByteMatchSetRequest struct {
	Headers CreateByteMatchSetHeaders
	Request shared.CreateByteMatchSetRequest `request:"mediaType=application/json"`
}

type CreateByteMatchSetResponse struct {
	ContentType                  string
	CreateByteMatchSetResponse   *shared.CreateByteMatchSetResponse
	StatusCode                   int64
	WafDisallowedNameException   *interface{}
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafInvalidParameterException *interface{}
	WafLimitsExceededException   *interface{}
	WafStaleDataException        *interface{}
}
