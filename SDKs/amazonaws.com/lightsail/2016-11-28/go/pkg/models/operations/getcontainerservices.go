package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerServicesXAmzTargetEnum string

const (
	GetContainerServicesXAmzTargetEnumLightsail20161128GetContainerServices GetContainerServicesXAmzTargetEnum = "Lightsail_20161128.GetContainerServices"
)

type GetContainerServicesHeaders struct {
	XAmzAlgorithm     *string                            `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                            `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                            `header:"name=X-Amz-Credential"`
	XAmzDate          *string                            `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                            `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                            `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                            `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerServicesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContainerServicesRequest struct {
	Headers GetContainerServicesHeaders
	Request shared.GetContainerServicesRequest `request:"mediaType=application/json"`
}

type GetContainerServicesResponse struct {
	AccessDeniedException       *interface{}
	ContainerServicesListResult *shared.ContainerServicesListResult
	ContentType                 string
	InvalidInputException       *interface{}
	NotFoundException           *interface{}
	ServiceException            *interface{}
	StatusCode                  int64
	UnauthenticatedException    *interface{}
}
