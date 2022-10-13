package operations

import (
	"openapi/pkg/models/shared"
)

type GetSampledRequestsXAmzTargetEnum string

const (
	GetSampledRequestsXAmzTargetEnumAwswafRegional20161128GetSampledRequests GetSampledRequestsXAmzTargetEnum = "AWSWAF_Regional_20161128.GetSampledRequests"
)

type GetSampledRequestsHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetSampledRequestsXAmzTargetEnum `header:"name=X-Amz-Target"`
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
