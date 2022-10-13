package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerServiceXAmzTargetEnum string

const (
	CreateContainerServiceXAmzTargetEnumLightsail20161128CreateContainerService CreateContainerServiceXAmzTargetEnum = "Lightsail_20161128.CreateContainerService"
)

type CreateContainerServiceHeaders struct {
	XAmzAlgorithm     *string                              `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContainerServiceXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContainerServiceRequest struct {
	Headers CreateContainerServiceHeaders
	Request shared.CreateContainerServiceRequest `request:"mediaType=application/json"`
}

type CreateContainerServiceResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	CreateContainerServiceResult *shared.CreateContainerServiceResult
	InvalidInputException        *interface{}
	NotFoundException            *interface{}
	ServiceException             *interface{}
	StatusCode                   int64
	UnauthenticatedException     *interface{}
}
