package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerServiceRegistryLoginXAmzTargetEnum string

const (
	CreateContainerServiceRegistryLoginXAmzTargetEnumLightsail20161128CreateContainerServiceRegistryLogin CreateContainerServiceRegistryLoginXAmzTargetEnum = "Lightsail_20161128.CreateContainerServiceRegistryLogin"
)

type CreateContainerServiceRegistryLoginHeaders struct {
	XAmzAlgorithm     *string                                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContainerServiceRegistryLoginXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
