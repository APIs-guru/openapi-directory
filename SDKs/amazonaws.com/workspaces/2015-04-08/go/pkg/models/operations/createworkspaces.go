package operations

import (
	"openapi/pkg/models/shared"
)

type CreateWorkspacesXAmzTargetEnum string

const (
	CreateWorkspacesXAmzTargetEnumWorkspacesServiceCreateWorkspaces CreateWorkspacesXAmzTargetEnum = "WorkspacesService.CreateWorkspaces"
)

type CreateWorkspacesHeaders struct {
	XAmzAlgorithm     *string                        `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        CreateWorkspacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type CreateWorkspacesRequest struct {
	Headers CreateWorkspacesHeaders
	Request shared.CreateWorkspacesRequest `request:"mediaType=application/json"`
}

type CreateWorkspacesResponse struct {
	ContentType                     string
	CreateWorkspacesResult          *shared.CreateWorkspacesResult
	InvalidParameterValuesException *interface{}
	ResourceLimitExceededException  *interface{}
	StatusCode                      int64
}
