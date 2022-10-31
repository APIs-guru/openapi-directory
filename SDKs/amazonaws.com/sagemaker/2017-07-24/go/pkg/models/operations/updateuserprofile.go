package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserProfileXAmzTargetEnum string

const (
	UpdateUserProfileXAmzTargetEnumSageMakerUpdateUserProfile UpdateUserProfileXAmzTargetEnum = "SageMaker.UpdateUserProfile"
)

type UpdateUserProfileHeaders struct {
	XAmzAlgorithm     *string                         `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                         `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                         `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                         `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                         `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                         `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                         `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateUserProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateUserProfileRequest struct {
	Headers UpdateUserProfileHeaders
	Request shared.UpdateUserProfileRequest `request:"mediaType=application/json"`
}

type UpdateUserProfileResponse struct {
	ContentType               string
	ResourceInUse             *interface{}
	ResourceLimitExceeded     *interface{}
	ResourceNotFound          *interface{}
	StatusCode                int64
	UpdateUserProfileResponse *shared.UpdateUserProfileResponse
}
