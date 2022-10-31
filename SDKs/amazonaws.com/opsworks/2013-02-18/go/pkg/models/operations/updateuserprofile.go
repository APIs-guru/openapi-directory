package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateUserProfileXAmzTargetEnum string

const (
	UpdateUserProfileXAmzTargetEnumOpsWorks20130218UpdateUserProfile UpdateUserProfileXAmzTargetEnum = "OpsWorks_20130218.UpdateUserProfile"
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
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
