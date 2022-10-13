package operations

import (
	"openapi/pkg/models/shared"
)

type StartWorkspacesXAmzTargetEnum string

const (
	StartWorkspacesXAmzTargetEnumWorkspacesServiceStartWorkspaces StartWorkspacesXAmzTargetEnum = "WorkspacesService.StartWorkspaces"
)

type StartWorkspacesHeaders struct {
	XAmzAlgorithm     *string                       `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                       `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                       `header:"name=X-Amz-Credential"`
	XAmzDate          *string                       `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                       `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                       `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                       `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        StartWorkspacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type StartWorkspacesRequest struct {
	Headers StartWorkspacesHeaders
	Request shared.StartWorkspacesRequest `request:"mediaType=application/json"`
}

type StartWorkspacesResponse struct {
	ContentType           string
	StartWorkspacesResult *shared.StartWorkspacesResult
	StatusCode            int64
}
