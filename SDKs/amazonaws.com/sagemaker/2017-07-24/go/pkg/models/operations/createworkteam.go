package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkteamXAmzTargetEnum string

const (
	CreateWorkteamXAmzTargetEnumSageMakerCreateWorkteam CreateWorkteamXAmzTargetEnum = "SageMaker.CreateWorkteam"
)

type CreateWorkteamHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkteamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkteamRequest struct {
	Headers CreateWorkteamHeaders
	Request shared.CreateWorkteamRequest `request:"mediaType=application/json"`
}

type CreateWorkteamResponse struct {
	ContentType            string
	CreateWorkteamResponse *shared.CreateWorkteamResponse
	ResourceInUse          *interface{}
	ResourceLimitExceeded  *interface{}
	StatusCode             int64
}
