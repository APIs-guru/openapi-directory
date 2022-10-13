package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteWorkteamXAmzTargetEnum string

const (
	DeleteWorkteamXAmzTargetEnumSageMakerDeleteWorkteam DeleteWorkteamXAmzTargetEnum = "SageMaker.DeleteWorkteam"
)

type DeleteWorkteamHeaders struct {
	XAmzAlgorithm     *string                      `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        DeleteWorkteamXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type DeleteWorkteamRequest struct {
	Headers DeleteWorkteamHeaders
	Request shared.DeleteWorkteamRequest `request:"mediaType=application/json"`
}

type DeleteWorkteamResponse struct {
	ContentType            string
	DeleteWorkteamResponse *shared.DeleteWorkteamResponse
	ResourceLimitExceeded  *interface{}
	StatusCode             int64
}
