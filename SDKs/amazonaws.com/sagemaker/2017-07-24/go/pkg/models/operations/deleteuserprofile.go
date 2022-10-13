package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUserProfileXAmzTargetEnum string

const (
	DeleteUserProfileXAmzTargetEnumSageMakerDeleteUserProfile DeleteUserProfileXAmzTargetEnum = "SageMaker.DeleteUserProfile"
)

type DeleteUserProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteUserProfileRequest struct {
	Headers DeleteUserProfileHeaders
	Request shared.DeleteUserProfileRequest `request:"mediaType=application/json"`
}

type DeleteUserProfileResponse struct {
	ContentType      string
	ResourceInUse    *interface{}
	ResourceNotFound *interface{}
	StatusCode       int64
}
