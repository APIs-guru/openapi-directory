package operations

import (
	"openapi/pkg/models/shared"
)

type CreateAclxAmzTargetEnum string

const (
	CreateAclxAmzTargetEnumAmazonMemoryDbCreateACL CreateAclxAmzTargetEnum = "AmazonMemoryDB.CreateACL"
)

type CreateACLHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateAclxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateACLRequest struct {
	Headers CreateACLHeaders
	Request shared.CreateACLRequest `request:"mediaType=application/json"`
}

type CreateACLResponse struct {
	ACLAlreadyExistsFault          *interface{}
	ACLQuotaExceededFault          *interface{}
	ContentType                    string
	CreateACLResponse              *shared.CreateACLResponse
	DefaultUserRequired            *interface{}
	DuplicateUserNameFault         *interface{}
	InvalidParameterValueException *interface{}
	StatusCode                     int64
	TagQuotaPerResourceExceeded    *interface{}
	UserNotFoundFault              *interface{}
}
