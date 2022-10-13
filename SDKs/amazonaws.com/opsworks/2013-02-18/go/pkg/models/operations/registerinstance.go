package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterInstanceXAmzTargetEnum string

const (
	RegisterInstanceXAmzTargetEnumOpsWorks20130218RegisterInstance RegisterInstanceXAmzTargetEnum = "OpsWorks_20130218.RegisterInstance"
)

type RegisterInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterInstanceRequest struct {
	Headers RegisterInstanceHeaders
	Request shared.RegisterInstanceRequest `request:"mediaType=application/json"`
}

type RegisterInstanceResponse struct {
	ContentType               string
	RegisterInstanceResult    *shared.RegisterInstanceResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
