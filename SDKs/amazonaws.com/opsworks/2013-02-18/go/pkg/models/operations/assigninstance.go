package operations

import (
	"openapi/pkg/models/shared"
)

type AssignInstanceXAmzTargetEnum string

const (
	AssignInstanceXAmzTargetEnumOpsWorks20130218AssignInstance AssignInstanceXAmzTargetEnum = "OpsWorks_20130218.AssignInstance"
)

type AssignInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        AssignInstanceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type AssignInstanceRequest struct {
	Headers AssignInstanceHeaders
	Request shared.AssignInstanceRequest `request:"mediaType=application/json"`
}

type AssignInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
