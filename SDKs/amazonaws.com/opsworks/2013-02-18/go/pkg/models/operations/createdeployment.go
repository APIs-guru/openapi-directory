package operations

import (
	"openapi/pkg/models/shared"
)

type CreateDeploymentXAmzTargetEnum string

const (
	CreateDeploymentXAmzTargetEnumOpsWorks20130218CreateDeployment CreateDeploymentXAmzTargetEnum = "OpsWorks_20130218.CreateDeployment"
)

type CreateDeploymentHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateDeploymentXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type CreateDeploymentRequest struct {
	Headers CreateDeploymentHeaders
	Request shared.CreateDeploymentRequest `request:"mediaType=application/json"`
}

type CreateDeploymentResponse struct {
	ContentType               string
	CreateDeploymentResult    *shared.CreateDeploymentResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
