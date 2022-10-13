package operations

import (
	"openapi/pkg/models/shared"
)

type RegisterEcsClusterXAmzTargetEnum string

const (
	RegisterEcsClusterXAmzTargetEnumOpsWorks20130218RegisterEcsCluster RegisterEcsClusterXAmzTargetEnum = "OpsWorks_20130218.RegisterEcsCluster"
)

type RegisterEcsClusterHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        RegisterEcsClusterXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type RegisterEcsClusterRequest struct {
	Headers RegisterEcsClusterHeaders
	Request shared.RegisterEcsClusterRequest `request:"mediaType=application/json"`
}

type RegisterEcsClusterResponse struct {
	ContentType               string
	RegisterEcsClusterResult  *shared.RegisterEcsClusterResult
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ValidationException       *interface{}
}
