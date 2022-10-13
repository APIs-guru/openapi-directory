package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerAPIMetadataXAmzTargetEnum string

const (
	GetContainerAPIMetadataXAmzTargetEnumLightsail20161128GetContainerAPIMetadata GetContainerAPIMetadataXAmzTargetEnum = "Lightsail_20161128.GetContainerAPIMetadata"
)

type GetContainerAPIMetadataHeaders struct {
	XAmzAlgorithm     *string                               `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerAPIMetadataXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetContainerAPIMetadataRequest struct {
	Headers GetContainerAPIMetadataHeaders
	Request map[string]interface{} `request:"mediaType=application/json"`
}

type GetContainerAPIMetadataResponse struct {
	AccessDeniedException         *interface{}
	ContentType                   string
	GetContainerAPIMetadataResult *shared.GetContainerAPIMetadataResult
	ServiceException              *interface{}
	StatusCode                    int64
	UnauthenticatedException      *interface{}
}
