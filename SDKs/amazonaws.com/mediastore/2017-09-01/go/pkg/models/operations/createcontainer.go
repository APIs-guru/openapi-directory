package operations

import (
	"openapi/pkg/models/shared"
)

type CreateContainerXAmzTargetEnum string

const (
	CreateContainerXAmzTargetEnumMediaStore20170901CreateContainer CreateContainerXAmzTargetEnum = "MediaStore_20170901.CreateContainer"
)

type CreateContainerHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateContainerXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateContainerRequest struct {
	Headers CreateContainerHeaders
	Request shared.CreateContainerInput `request:"mediaType=application/json"`
}

type CreateContainerResponse struct {
	ContainerInUseException *interface{}
	ContentType             string
	CreateContainerOutput   *shared.CreateContainerOutput
	InternalServerError     *interface{}
	LimitExceededException  *interface{}
	StatusCode              int64
}
