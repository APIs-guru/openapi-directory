package operations

import (
	"openapi/pkg/models/shared"
)

type GetEntitiesXAmzTargetEnum string

const (
	GetEntitiesXAmzTargetEnumIotThingsGraphFrontEndServiceGetEntities GetEntitiesXAmzTargetEnum = "IotThingsGraphFrontEndService.GetEntities"
)

type GetEntitiesHeaders struct {
	XAmzAlgorithm     *string                   `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                   `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                   `header:"name=X-Amz-Credential"`
	XAmzDate          *string                   `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                   `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                   `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                   `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        GetEntitiesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type GetEntitiesRequest struct {
	Headers GetEntitiesHeaders
	Request shared.GetEntitiesRequest `request:"mediaType=application/json"`
}

type GetEntitiesResponse struct {
	ContentType               string
	GetEntitiesResponse       *shared.GetEntitiesResponse
	InternalFailureException  *interface{}
	InvalidRequestException   *interface{}
	ResourceNotFoundException *interface{}
	StatusCode                int64
	ThrottlingException       *interface{}
}
