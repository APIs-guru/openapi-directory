package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateAclxAmzTargetEnum string

const (
	UpdateAclxAmzTargetEnumAmazonMemoryDbUpdateACL UpdateAclxAmzTargetEnum = "AmazonMemoryDB.UpdateACL"
)

type UpdateACLHeaders struct {
	XAmzAlgorithm     *string                 `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                 `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                 `header:"name=X-Amz-Credential"`
	XAmzDate          *string                 `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                 `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                 `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                 `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateAclxAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateACLRequest struct {
	Headers UpdateACLHeaders
	Request shared.UpdateACLRequest `request:"mediaType=application/json"`
}

type UpdateACLResponse struct {
	ACLNotFoundFault                     *interface{}
	ContentType                          string
	DefaultUserRequired                  *interface{}
	DuplicateUserNameFault               *interface{}
	InvalidACLStateFault                 *interface{}
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	StatusCode                           int64
	UpdateACLResponse                    *shared.UpdateACLResponse
	UserNotFoundFault                    *interface{}
}
