package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignInstanceXAmzTargetEnum string

const (
	UnassignInstanceXAmzTargetEnumOpsWorks20130218UnassignInstance UnassignInstanceXAmzTargetEnum = "OpsWorks_20130218.UnassignInstance"
)

type UnassignInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        UnassignInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type UnassignInstanceRequest struct {
	Headers UnassignInstanceHeaders
	Request shared.UnassignInstanceRequest `request:"mediaType=application/json"`
}

type UnassignInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
