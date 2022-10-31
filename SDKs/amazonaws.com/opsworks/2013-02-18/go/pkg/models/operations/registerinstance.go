package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterInstanceXAmzTargetEnum string

const (
	RegisterInstanceXAmzTargetEnumOpsWorks20130218RegisterInstance RegisterInstanceXAmzTargetEnum = "OpsWorks_20130218.RegisterInstance"
)

type RegisterInstanceHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
