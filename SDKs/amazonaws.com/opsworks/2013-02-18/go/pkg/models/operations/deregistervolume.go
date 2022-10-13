package operations

import (
	"openapi/pkg/models/shared"
)

type DeregisterVolumeXAmzTargetEnum string

const (
	DeregisterVolumeXAmzTargetEnumOpsWorks20130218DeregisterVolume DeregisterVolumeXAmzTargetEnum = "OpsWorks_20130218.DeregisterVolume"
)

type DeregisterVolumeHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeregisterVolumeXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeregisterVolumeRequest struct {
	Headers DeregisterVolumeHeaders
	Request shared.DeregisterVolumeRequest `request:"mediaType=application/json"`
}

type DeregisterVolumeResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
