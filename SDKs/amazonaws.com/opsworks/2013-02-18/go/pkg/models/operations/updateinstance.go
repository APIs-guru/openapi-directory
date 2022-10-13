package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateInstanceXAmzTargetEnum string

const (
	UpdateInstanceXAmzTargetEnumOpsWorks20130218UpdateInstance UpdateInstanceXAmzTargetEnum = "OpsWorks_20130218.UpdateInstance"
)

type UpdateInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UpdateInstanceRequest struct {
	Headers UpdateInstanceHeaders
	Request shared.UpdateInstanceRequest `request:"mediaType=application/json"`
}

type UpdateInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
