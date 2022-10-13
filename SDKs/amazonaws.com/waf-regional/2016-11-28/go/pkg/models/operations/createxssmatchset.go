package operations

import (
	"openapi/pkg/models/shared"
)

type CreateXSSMatchSetXAmzTargetEnum string

const (
	CreateXSSMatchSetXAmzTargetEnumAwswafRegional20161128CreateXSSMatchSet CreateXSSMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateXssMatchSet"
)

type CreateXSSMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateXSSMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateXSSMatchSetRequest struct {
	Headers CreateXSSMatchSetHeaders
	Request shared.CreateXSSMatchSetRequest `request:"mediaType=application/json"`
}

type CreateXSSMatchSetResponse struct {
	ContentType                  string
	CreateXSSMatchSetResponse    *shared.CreateXSSMatchSetResponse
	StatusCode                   int64
	WafDisallowedNameException   *interface{}
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafInvalidParameterException *interface{}
	WafLimitsExceededException   *interface{}
	WafStaleDataException        *interface{}
}
