package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebACLForResourceXAmzTargetEnum string

const (
	GetWebACLForResourceXAmzTargetEnumAwswafRegional20161128GetWebACLForResource GetWebACLForResourceXAmzTargetEnum = "AWSWAF_Regional_20161128.GetWebACLForResource"
)

type GetWebACLForResourceHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWebACLForResourceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetWebACLForResourceRequest struct {
	Headers GetWebACLForResourceHeaders
	Request shared.GetWebACLForResourceRequest `request:"mediaType=application/json"`
}

type GetWebACLForResourceResponse struct {
	ContentType                   string
	GetWebACLForResourceResponse  *shared.GetWebACLForResourceResponse
	StatusCode                    int64
	WafInternalErrorException     *interface{}
	WafInvalidAccountException    *interface{}
	WafInvalidParameterException  *interface{}
	WafNonexistentItemException   *interface{}
	WafUnavailableEntityException *interface{}
}
