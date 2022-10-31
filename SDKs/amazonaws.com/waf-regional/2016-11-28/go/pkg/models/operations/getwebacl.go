package operations

import (
	"openapi/pkg/models/shared"
)

type GetWebAclxAmzTargetEnum string

const (
	GetWebAclxAmzTargetEnumAwswafRegional20161128GetWebACL GetWebAclxAmzTargetEnum = "AWSWAF_Regional_20161128.GetWebACL"
)

type GetWebACLHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type GetWebACLRequest struct {
	Headers GetWebACLHeaders
	Request shared.GetWebACLRequest `request:"mediaType=application/json"`
}

type GetWebACLResponse struct {
	ContentType                 string
	GetWebACLResponse           *shared.GetWebACLResponse
	StatusCode                  int64
	WafInternalErrorException   *interface{}
	WafInvalidAccountException  *interface{}
	WafNonexistentItemException *interface{}
}
