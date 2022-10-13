package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateGeoMatchSetXAmzTargetEnum string

const (
	UpdateGeoMatchSetXAmzTargetEnumAwswaf20150824UpdateGeoMatchSet UpdateGeoMatchSetXAmzTargetEnum = "AWSWAF_20150824.UpdateGeoMatchSet"
)

type UpdateGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateGeoMatchSetXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateGeoMatchSetRequest struct {
	Headers UpdateGeoMatchSetHeaders
	Request shared.UpdateGeoMatchSetRequest `request:"mediaType=application/json"`
}

type UpdateGeoMatchSetResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateGeoMatchSetResponse        *shared.UpdateGeoMatchSetResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafReferencedItemException       *interface{}
	WafStaleDataException            *interface{}
}
