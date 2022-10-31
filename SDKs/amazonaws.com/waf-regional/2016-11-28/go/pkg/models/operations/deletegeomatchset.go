package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteGeoMatchSetXAmzTargetEnum string

const (
	DeleteGeoMatchSetXAmzTargetEnumAwswafRegional20161128DeleteGeoMatchSet DeleteGeoMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.DeleteGeoMatchSet"
)

type DeleteGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteGeoMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
