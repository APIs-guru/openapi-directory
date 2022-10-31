package operations

import (
	"openapi/pkg/models/shared"
)

type ListGeoMatchSetsXAmzTargetEnum string

const (
	ListGeoMatchSetsXAmzTargetEnumAwswafRegional20161128ListGeoMatchSets ListGeoMatchSetsXAmzTargetEnum = "AWSWAF_Regional_20161128.ListGeoMatchSets"
)

type ListGeoMatchSetsHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListGeoMatchSetsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListGeoMatchSetsRequest struct {
	Headers ListGeoMatchSetsHeaders
	Request shared.ListGeoMatchSetsRequest `request:"mediaType=application/json"`
}

type ListGeoMatchSetsResponse struct {
	ContentType                string
	ListGeoMatchSetsResponse   *shared.ListGeoMatchSetsResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
