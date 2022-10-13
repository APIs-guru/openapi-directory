package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterVolumeXAmzTargetEnum string

const (
	RegisterVolumeXAmzTargetEnumOpsWorks20130218RegisterVolume RegisterVolumeXAmzTargetEnum = "OpsWorks_20130218.RegisterVolume"
)

type RegisterVolumeHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterVolumeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterVolumeRequest struct {
	Headers RegisterVolumeHeaders
	Request shared.RegisterVolumeRequest `request:"mediaType=application/json"`
}

type RegisterVolumeResponse struct {
	ContentType               string
	RegisterVolumeResult      *shared.RegisterVolumeResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
