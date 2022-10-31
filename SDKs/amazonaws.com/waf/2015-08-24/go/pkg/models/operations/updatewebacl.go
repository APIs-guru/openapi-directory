package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWebAclxAmzTargetEnum string

const (
	UpdateWebAclxAmzTargetEnumAwswaf20150824UpdateWebACL UpdateWebAclxAmzTargetEnum = "AWSWAF_20150824.UpdateWebACL"
)

type UpdateWebACLHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateWebACLRequest struct {
	Headers UpdateWebACLHeaders
	Request shared.UpdateWebACLRequest `request:"mediaType=application/json"`
}

type UpdateWebACLResponse struct {
	ContentType                      string
	StatusCode                       int64
	UpdateWebACLResponse             *shared.UpdateWebACLResponse
	WafInternalErrorException        *interface{}
	WafInvalidAccountException       *interface{}
	WafInvalidOperationException     *interface{}
	WafInvalidParameterException     *interface{}
	WafLimitsExceededException       *interface{}
	WafNonexistentContainerException *interface{}
	WafNonexistentItemException      *interface{}
	WafReferencedItemException       *interface{}
	WafStaleDataException            *interface{}
	WafSubscriptionNotFoundException *interface{}
}
