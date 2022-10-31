package operations

import (
	"openapi/pkg/models/shared"
)

type UpdateWorkteamXAmzTargetEnum string

const (
	UpdateWorkteamXAmzTargetEnumSageMakerUpdateWorkteam UpdateWorkteamXAmzTargetEnum = "SageMaker.UpdateWorkteam"
)

type UpdateWorkteamHeaders struct {
	XAmzAlgorithm     *string                      `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                      `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                      `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                      `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                      `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                      `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                      `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        UpdateWorkteamXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type UpdateWorkteamRequest struct {
	Headers UpdateWorkteamHeaders
	Request shared.UpdateWorkteamRequest `request:"mediaType=application/json"`
}

type UpdateWorkteamResponse struct {
	ContentType            string
	ResourceLimitExceeded  *interface{}
	StatusCode             int64
	UpdateWorkteamResponse *shared.UpdateWorkteamResponse
}
