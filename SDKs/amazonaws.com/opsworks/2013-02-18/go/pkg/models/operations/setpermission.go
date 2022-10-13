package operations

import (
	"openapi/pkg/models/shared"
)

type SetPermissionXAmzTargetEnum string

const (
	SetPermissionXAmzTargetEnumOpsWorks20130218SetPermission SetPermissionXAmzTargetEnum = "OpsWorks_20130218.SetPermission"
)

type SetPermissionHeaders struct {
	XAmzAlgorithm     *string                     `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                     `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                     `header:"name=X-Amz-Credential"`
	XAmzDate          *string                     `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                     `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                     `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                     `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        SetPermissionXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type SetPermissionRequest struct {
	Headers SetPermissionHeaders
	Request shared.SetPermissionRequest `request:"mediaType=application/json"`
}

type SetPermissionResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
