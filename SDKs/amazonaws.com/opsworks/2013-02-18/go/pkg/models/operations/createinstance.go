package operations

import (
	"openapi/pkg/models/shared"
)

type CreateInstanceXAmzTargetEnum string

const (
	CreateInstanceXAmzTargetEnumOpsWorks20130218CreateInstance CreateInstanceXAmzTargetEnum = "OpsWorks_20130218.CreateInstance"
)

type CreateInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateInstanceRequest struct {
	Headers CreateInstanceHeaders
	Request shared.CreateInstanceRequest `request:"mediaType=application/json"`
}

type CreateInstanceResponse struct {
	ContentType               string
	CreateInstanceResult      *shared.CreateInstanceResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
