package operations

import (
	"openapi/pkg/models/shared"
)

type UnassignInstanceXAmzTargetEnum string

const (
	UnassignInstanceXAmzTargetEnumOpsWorks20130218UnassignInstance UnassignInstanceXAmzTargetEnum = "OpsWorks_20130218.UnassignInstance"
)

type UnassignInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UnassignInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
