package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMyUserProfileXAmzTargetEnum string

const (
	UpdateMyUserProfileXAmzTargetEnumOpsWorks20130218UpdateMyUserProfile UpdateMyUserProfileXAmzTargetEnum = "OpsWorks_20130218.UpdateMyUserProfile"
)

type UpdateMyUserProfileHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMyUserProfileXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateMyUserProfileRequest struct {
	Headers UpdateMyUserProfileHeaders
	Request shared.UpdateMyUserProfileRequest `request:"mediaType=application/json"`
}

type UpdateMyUserProfileResponse struct {
	ContentType         string
	StatusCode          int64
	ValidationException *interface{}
}
