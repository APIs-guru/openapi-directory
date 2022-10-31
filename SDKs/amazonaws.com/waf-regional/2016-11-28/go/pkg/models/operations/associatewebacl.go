package operations

import (
	"openapi/pkg/models/shared"
)

type AssociateWebAclxAmzTargetEnum string

const (
	AssociateWebAclxAmzTargetEnumAwswafRegional20161128AssociateWebACL AssociateWebAclxAmzTargetEnum = "AWSWAF_Regional_20161128.AssociateWebACL"
)

type AssociateWebACLHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        AssociateWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type AssociateWebACLRequest struct {
	Headers AssociateWebACLHeaders
	Request shared.AssociateWebACLRequest `request:"mediaType=application/json"`
}

type AssociateWebACLResponse struct {
	AssociateWebACLResponse       map[string]interface{}
	ContentType                   string
	StatusCode                    int64
	WafInternalErrorException     *interface{}
	WafInvalidAccountException    *interface{}
	WafInvalidParameterException  *interface{}
	WafNonexistentItemException   *interface{}
	WafUnavailableEntityException *interface{}
}
