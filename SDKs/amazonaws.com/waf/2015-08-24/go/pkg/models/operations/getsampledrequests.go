package operations

import (
	"openapi/pkg/models/shared"
)

type GetSampledRequestsXAmzTargetEnum string

const (
	GetSampledRequestsXAmzTargetEnumAwswaf20150824GetSampledRequests GetSampledRequestsXAmzTargetEnum = "AWSWAF_20150824.GetSampledRequests"
)

type GetSampledRequestsHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSampledRequestsXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetSampledRequestsRequest struct {
	Headers GetSampledRequestsHeaders
	Request shared.GetSampledRequestsRequest `request:"mediaType=application/json"`
}

type GetSampledRequestsResponse struct {
	ContentType                 string
	GetSampledRequestsResponse  *shared.GetSampledRequestsResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafNonexistentItemException *interface{}
}
