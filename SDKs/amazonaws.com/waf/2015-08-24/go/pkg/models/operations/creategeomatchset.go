package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGeoMatchSetXAmzTargetEnum string

const (
	CreateGeoMatchSetXAmzTargetEnumAwswaf20150824CreateGeoMatchSet CreateGeoMatchSetXAmzTargetEnum = "AWSWAF_20150824.CreateGeoMatchSet"
)

type CreateGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGeoMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateGeoMatchSetRequest struct {
	Headers CreateGeoMatchSetHeaders
	Request shared.CreateGeoMatchSetRequest `request:"mediaType=application/json"`
}

type CreateGeoMatchSetResponse struct {
	ContentType                  string
	CreateGeoMatchSetResponse    *shared.CreateGeoMatchSetResponse
	StatusCode                   int64
	WafDisallowedNameException   *interface{}
	WafInternalErrorException    *interface{}
	WafInvalidAccountException   *interface{}
	WafInvalidParameterException *interface{}
	WafLimitsExceededException   *interface{}
	WafStaleDataException        *interface{}
}
