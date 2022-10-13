package operations

import (
	"openapi/pkg/models/shared"
)

type CreateIPSetXAmzTargetEnum string

const (
	CreateIPSetXAmzTargetEnumAwswaf20150824CreateIPSet CreateIPSetXAmzTargetEnum = "AWSWAF_20150824.CreateIPSet"
)

type CreateIPSetHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateIPSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateIPSetRequest struct {
	Headers CreateIPSetHeaders
	Request shared.CreateIPSetRequest `request:"mediaType=application/json"`
}

type CreateIPSetResponse struct {
	ContentType                  string
	CreateIPSetResponse          *shared.CreateIPSetResponse
	StatusCode                   int64
	WafDisallowedNameException   *interface{}
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafInvalidParameterException *interface{}
	WafLimitsExceededException   *interface{}
	WafStaleDataException        *interface{}
}
