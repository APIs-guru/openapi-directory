package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerImagesXAmzTargetEnum string

const (
	GetContainerImagesXAmzTargetEnumLightsail20161128GetContainerImages GetContainerImagesXAmzTargetEnum = "Lightsail_20161128.GetContainerImages"
)

type GetContainerImagesHeaders struct {
	XAmzAlgorithm     *string                          `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerImagesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContainerImagesRequest struct {
	Headers GetContainerImagesHeaders
	Request shared.GetContainerImagesRequest `request:"mediaType=application/json"`
}

type GetContainerImagesResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetContainerImagesResult *shared.GetContainerImagesResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
