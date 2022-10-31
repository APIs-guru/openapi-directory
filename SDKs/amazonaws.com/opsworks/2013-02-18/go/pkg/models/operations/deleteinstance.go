package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteInstanceXAmzTargetEnum string

const (
	DeleteInstanceXAmzTargetEnumOpsWorks20130218DeleteInstance DeleteInstanceXAmzTargetEnum = "OpsWorks_20130218.DeleteInstance"
)

type DeleteInstanceHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteInstanceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteInstanceRequest struct {
	Headers DeleteInstanceHeaders
	Request shared.DeleteInstanceRequest `request:"mediaType=application/json"`
}

type DeleteInstanceResponse struct {
	ContentType               string
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
