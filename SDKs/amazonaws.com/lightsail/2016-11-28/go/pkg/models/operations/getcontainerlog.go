package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerLogXAmzTargetEnum string

const (
	GetContainerLogXAmzTargetEnumLightsail20161128GetContainerLog GetContainerLogXAmzTargetEnum = "Lightsail_20161128.GetContainerLog"
)

type GetContainerLogHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerLogXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContainerLogRequest struct {
	Headers GetContainerLogHeaders
	Request shared.GetContainerLogRequest `request:"mediaType=application/json"`
}

type GetContainerLogResponse struct {
	AccessDeniedException    *interface{}
	ContentType              string
	GetContainerLogResult    *shared.GetContainerLogResult
	InvalidInputException    *interface{}
	NotFoundException        *interface{}
	ServiceException         *interface{}
	StatusCode               int64
	UnauthenticatedException *interface{}
}
