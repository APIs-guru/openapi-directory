package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkteamXAmzTargetEnum string

const (
	CreateWorkteamXAmzTargetEnumSageMakerCreateWorkteam CreateWorkteamXAmzTargetEnum = "SageMaker.CreateWorkteam"
)

type CreateWorkteamHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
