package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteContainerXAmzTargetEnum string

const (
	DeleteContainerXAmzTargetEnumMediaStore20170901DeleteContainer DeleteContainerXAmzTargetEnum = "MediaStore_20170901.DeleteContainer"
)

type DeleteContainerHeaders struct {
	XAmzAlgorithm     *string                       `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteContainerXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type DeleteContainerRequest struct {
	Headers DeleteContainerHeaders
	Request shared.DeleteContainerInput `request:"mediaType=application/json"`
}

type DeleteContainerResponse struct {
	ContainerInUseException    *interface{}
	ContainerNotFoundException *interface{}
	ContentType                string
	DeleteContainerOutput      map[string]interface{}
	InternalServerError        *interface{}
	StatusCode                 int64
}
