package operations

import (
	"openapi/pkg/models/shared"
)

type ListWebAcLsXAmzTargetEnum string

const (
	ListWebAcLsXAmzTargetEnumAwswaf20150824ListWebAcLs ListWebAcLsXAmzTargetEnum = "AWSWAF_20150824.ListWebACLs"
)

type ListWebAcLsHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListWebAcLsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListWebAcLsRequest struct {
	Headers ListWebAcLsHeaders
	Request shared.ListWebAcLsRequest `request:"mediaType=application/json"`
}

type ListWebAcLsResponse struct {
	ContentType                string
	ListWebAcLsResponse        *shared.ListWebAcLsResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
