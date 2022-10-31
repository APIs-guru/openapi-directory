package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateContainerServiceXAmzTargetEnum string

const (
	UpdateContainerServiceXAmzTargetEnumLightsail20161128UpdateContainerService UpdateContainerServiceXAmzTargetEnum = "Lightsail_20161128.UpdateContainerService"
)

type UpdateContainerServiceHeaders struct {
	XAmzAlgorithm     *string                              `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                              `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                              `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                              `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                              `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                              `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                              `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateContainerServiceXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateContainerServiceRequest struct {
	Headers UpdateContainerServiceHeaders
	Request shared.UpdateContainerServiceRequest `request:"mediaType=application/json"`
}

type UpdateContainerServiceResponse struct {
	AccessDeniedException        *interface{}
	ContentType                  string
	InvalidInputException        *interface{}
	NotFoundException            *interface{}
	ServiceException             *interface{}
	StatusCode                   int64
	UnauthenticatedException     *interface{}
	UpdateContainerServiceResult *shared.UpdateContainerServiceResult
}
