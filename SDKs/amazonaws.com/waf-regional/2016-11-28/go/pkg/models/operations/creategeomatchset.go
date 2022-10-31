package operations

import (
	"openapi/pkg/models/shared"
)

type CreateGeoMatchSetXAmzTargetEnum string

const (
	CreateGeoMatchSetXAmzTargetEnumAwswafRegional20161128CreateGeoMatchSet CreateGeoMatchSetXAmzTargetEnum = "AWSWAF_Regional_20161128.CreateGeoMatchSet"
)

type CreateGeoMatchSetHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateGeoMatchSetXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
