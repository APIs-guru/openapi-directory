package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserXAmzTargetEnum string

const (
	UpdateUserXAmzTargetEnumAmazonMemoryDbUpdateUser UpdateUserXAmzTargetEnum = "AmazonMemoryDB.UpdateUser"
)

type UpdateUserHeaders struct {
	XAmzAlgorithm     *string                  `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                  `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                  `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                  `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                  `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                  `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                  `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateUserRequest struct {
	Headers UpdateUserHeaders
	Request shared.UpdateUserRequest `request:"mediaType=application/json"`
}

type UpdateUserResponse struct {
	ContentType                          string
	InvalidParameterCombinationException *interface{}
	InvalidParameterValueException       *interface{}
	InvalidUserStateFault                *interface{}
	StatusCode                           int64
	UpdateUserResponse                   *shared.UpdateUserResponse
	UserNotFoundFault                    *interface{}
}
