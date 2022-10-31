package operations

import (
	"openapi/pkg/models/shared"
)

type ListResourcesForWebAclxAmzTargetEnum string

const (
	ListResourcesForWebAclxAmzTargetEnumAwswafRegional20161128ListResourcesForWebACL ListResourcesForWebAclxAmzTargetEnum = "AWSWAF_Regional_20161128.ListResourcesForWebACL"
)

type ListResourcesForWebACLHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        ListResourcesForWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type ListResourcesForWebACLRequest struct {
	Headers ListResourcesForWebACLHeaders
	Request shared.ListResourcesForWebACLRequest `request:"mediaType=application/json"`
}

type ListResourcesForWebACLResponse struct {
	ContentType                    string
	ListResourcesForWebACLResponse *shared.ListResourcesForWebACLResponse
	StatusCode                     int64
	WafInternalErrorException      *interface{}
	WafInvalidAccountException     *interface{}
	WafInvalidParameterException   *interface{}
	WafNonexistentItemException    *interface{}
}
