package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGeoMatchSetXAmzTargetEnum string

const (
	DeleteGeoMatchSetXAmzTargetEnumAwswaf20150824DeleteGeoMatchSet DeleteGeoMatchSetXAmzTargetEnum = "AWSWAF_20150824.DeleteGeoMatchSet"
)

type DeleteGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGeoMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteGeoMatchSetRequest struct {
	Headers DeleteGeoMatchSetHeaders
	Request shared.DeleteGeoMatchSetRequest `request:"mediaType=application/json"`
}

type DeleteGeoMatchSetResponse struct {
	ContentType                 string
	DeleteGeoMatchSetResponse   *shared.DeleteGeoMatchSetResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonEmptyEntityException  *interface{}
	WafNonexistentItemException *interface{}
	WafReferencedItemException  *interface{}
	WafStaleDataException       *interface{}
}
