package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerImagesXAmzTargetEnum string

const (
	GetContainerImagesXAmzTargetEnumLightsail20161128GetContainerImages GetContainerImagesXAmzTargetEnum = "Lightsail_20161128.GetContainerImages"
)

type GetContainerImagesHeaders struct {
	XAmzAlgorithm     *string                          `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                          `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                          `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                          `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                          `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                          `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                          `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerImagesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
