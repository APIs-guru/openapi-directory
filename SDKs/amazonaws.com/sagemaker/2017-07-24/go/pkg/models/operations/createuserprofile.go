package operations

import (
	"openapi/pkg/models/shared"
)

type CreateUserProfileXAmzTargetEnum string

const (
	CreateUserProfileXAmzTargetEnumSageMakerCreateUserProfile CreateUserProfileXAmzTargetEnum = "SageMaker.CreateUserProfile"
)

type CreateUserProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateUserProfileRequest struct {
	Headers CreateUserProfileHeaders
	Request shared.CreateUserProfileRequest `request:"mediaType=application/json"`
}

type CreateUserProfileResponse struct {
	ContentType               string
	CreateUserProfileResponse *shared.CreateUserProfileResponse
	ResourceInUse             *interface{}
	ResourceLimitExceeded     *interface{}
	StatusCode                int64
}
