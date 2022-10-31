package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteAclxAmzTargetEnum string

const (
	DeleteAclxAmzTargetEnumAmazonMemoryDbDeleteACL DeleteAclxAmzTargetEnum = "AmazonMemoryDB.DeleteACL"
)

type DeleteACLHeaders struct {
	XAmzAlgorithm     *string                 `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteAclxAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteACLRequest struct {
	Headers DeleteACLHeaders
	Request shared.DeleteACLRequest `request:"mediaType=application/json"`
}

type DeleteACLResponse struct {
	ACLNotFoundFault               *interface{}
	ContentType                    string
	DeleteACLResponse              *shared.DeleteACLResponse
	InvalidACLStateFault           *interface{}
	InvalidParameterValueException *interface{}
	StatusCode                     int64
}
