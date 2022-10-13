package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerServiceRegistryLoginXAmzTargetEnum string

const (
	CreateContainerServiceRegistryLoginXAmzTargetEnumLightsail20161128CreateContainerServiceRegistryLogin CreateContainerServiceRegistryLoginXAmzTargetEnum = "Lightsail_20161128.CreateContainerServiceRegistryLogin"
)

type CreateContainerServiceRegistryLoginHeaders struct {
	XAmzAlgorithm     *string                                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContainerServiceRegistryLoginXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContainerServiceRegistryLoginRequest struct {
	Headers CreateContainerServiceRegistryLoginHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type CreateContainerServiceRegistryLoginResponse struct {
	AccessDeniedException                     *interface{}
	ContentType                               string
	CreateContainerServiceRegistryLoginResult *shared.CreateContainerServiceRegistryLoginResult
	InvalidInputException                     *interface{}
	NotFoundException                         *interface{}
	ServiceException                          *interface{}
	StatusCode                                int64
	UnauthenticatedException                  *interface{}
}
