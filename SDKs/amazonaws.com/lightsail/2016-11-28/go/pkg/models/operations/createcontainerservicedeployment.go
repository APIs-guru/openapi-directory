package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerServiceDeploymentXAmzTargetEnum string

const (
	CreateContainerServiceDeploymentXAmzTargetEnumLightsail20161128CreateContainerServiceDeployment CreateContainerServiceDeploymentXAmzTargetEnum = "Lightsail_20161128.CreateContainerServiceDeployment"
)

type CreateContainerServiceDeploymentHeaders struct {
	XAmzAlgorithm     *string                                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContainerServiceDeploymentXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContainerServiceDeploymentRequest struct {
	Headers CreateContainerServiceDeploymentHeaders
	Request shared.CreateContainerServiceDeploymentRequest `request:"mediaType=application/json"`
}

type CreateContainerServiceDeploymentResponse struct {
	AccessDeniedException                  *interface{}
	ContentType                            string
	CreateContainerServiceDeploymentResult *shared.CreateContainerServiceDeploymentResult
	InvalidInputException                  *interface{}
	NotFoundException                      *interface{}
	ServiceException                       *interface{}
	StatusCode                             int64
	UnauthenticatedException               *interface{}
}
