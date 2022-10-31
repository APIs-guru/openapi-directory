package operations

import (
	"openapi/pkg/models/shared"
)

type GetContainerAPIMetadataXAmzTargetEnum string

const (
	GetContainerAPIMetadataXAmzTargetEnumLightsail20161128GetContainerAPIMetadata GetContainerAPIMetadataXAmzTargetEnum = "Lightsail_20161128.GetContainerAPIMetadata"
)

type GetContainerAPIMetadataHeaders struct {
	XAmzAlgorithm     *string                               `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                               `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                               `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                               `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                               `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                               `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                               `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        GetContainerAPIMetadataXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
