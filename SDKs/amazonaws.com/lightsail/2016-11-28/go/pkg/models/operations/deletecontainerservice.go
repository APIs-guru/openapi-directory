package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContainerServiceXAmzTargetEnum string

const (
	DeleteContainerServiceXAmzTargetEnumLightsail20161128DeleteContainerService DeleteContainerServiceXAmzTargetEnum = "Lightsail_20161128.DeleteContainerService"
)

type DeleteContainerServiceHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContainerServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteContainerServiceRequest struct {
	Headers DeleteContainerServiceHeaders
	Request shared.DeleteContainerServiceRequest `request:"mediaType=application/json"`
}

type DeleteContainerServiceResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	DeleteContainerServiceResult map[string]interface{}
	InvalidInputException        *interface{}
	NotFoundException            *interface{}
	ServiceException             *interface{}
	StatusCode                   int64
	UnauthenticatedException     *interface{}
}
