package operations

import (
	"openapi/pkg/models/shared"
)

type GetGeoMatchSetXAmzTargetEnum string

const (
	GetGeoMatchSetXAmzTargetEnumAwswaf20150824GetGeoMatchSet GetGeoMatchSetXAmzTargetEnum = "AWSWAF_20150824.GetGeoMatchSet"
)

type GetGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetGeoMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
