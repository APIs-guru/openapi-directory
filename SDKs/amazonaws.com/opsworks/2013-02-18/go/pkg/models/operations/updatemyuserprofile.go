package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateMyUserProfileXAmzTargetEnum string

const (
	UpdateMyUserProfileXAmzTargetEnumOpsWorks20130218UpdateMyUserProfile UpdateMyUserProfileXAmzTargetEnum = "OpsWorks_20130218.UpdateMyUserProfile"
)

type UpdateMyUserProfileHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateMyUserProfileXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
