package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeoMatchSetXAmzTargetEnum string

const (
	GetGeoMatchSetXAmzTargetEnumAwswafRegional20161128GetGeoMatchSet GetGeoMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.GetGeoMatchSet"
)

type GetGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGeoMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetGeoMatchSetRequest struct {
	Headers GetGeoMatchSetHeaders
	Request shared.GetGeoMatchSetRequest `request:"mediaType=application/json"`
}

type GetGeoMatchSetResponse struct {
	ContentType                 string
	GetGeoMatchSetResponse      *shared.GetGeoMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
