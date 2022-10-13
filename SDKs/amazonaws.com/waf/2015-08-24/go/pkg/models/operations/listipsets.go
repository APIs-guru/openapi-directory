package operations

import (
	"openapi/pkg/models/shared"
)

type ListIPSetsXAmzTargetEnum string

const (
	ListIPSetsXAmzTargetEnumAwswaf20150824ListIPSets ListIPSetsXAmzTargetEnum = "AWSWAF_20150824.ListIPSets"
)

type ListIPSetsHeaders struct {
	XAmzAlgorithm     *string                  `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        ListIPSetsXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type ListIPSetsRequest struct {
	Headers ListIPSetsHeaders
	Request shared.ListIPSetsRequest `request:"mediaType=application/json"`
}

type ListIPSetsResponse struct {
	ContentType                string
	ListIPSetsResponse         *shared.ListIPSetsResponse
	StatusCode                 int64
	WafInternalErrorException  *interface{}
	WafInvalidAccountException *interface{}
}
