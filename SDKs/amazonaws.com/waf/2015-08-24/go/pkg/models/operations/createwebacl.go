package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWebAclxAmzTargetEnum string

const (
	CreateWebAclxAmzTargetEnumAwswaf20150824CreateWebACL CreateWebAclxAmzTargetEnum = "AWSWAF_20150824.CreateWebACL"
)

type CreateWebACLHeaders struct {
	XAmzAlgorithm     *string                    `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                    `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                    `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                    `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                    `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                    `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                    `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWebAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateWebACLRequest struct {
	Headers CreateWebACLHeaders
	Request shared.CreateWebACLRequest `request:"mediaType=application/json"`
}

type CreateWebACLResponse struct {
	ContentType                           string
	CreateWebACLResponse                  *shared.CreateWebACLResponse
	StatusCode                            int64
	WafBadRequestException                *interface{}
	WafDisallowedNameException            *interface{}
	WafInternalErrorException             *interface{}
	WafInvalidAccountException            *interface{}
	WafInvalidParameterException          *interface{}
	WafLimitsExceededException            *interface{}
	WafStaleDataException                 *interface{}
	WafTagOperationException              *interface{}
	WafTagOperationInternalErrorException *interface{}
}
