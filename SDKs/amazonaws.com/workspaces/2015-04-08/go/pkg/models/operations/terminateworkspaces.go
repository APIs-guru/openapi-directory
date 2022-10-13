package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateWorkspacesXAmzTargetEnum string

const (
	TerminateWorkspacesXAmzTargetEnumWorkspacesServiceTerminateWorkspaces TerminateWorkspacesXAmzTargetEnum = "WorkspacesService.TerminateWorkspaces"
)

type TerminateWorkspacesHeaders struct {
	XAmzAlgorithm     *string                           `header:"name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateWorkspacesXAmzTargetEnum `header:"name=X-Amz-Target"`
}

type TerminateWorkspacesRequest struct {
	Headers TerminateWorkspacesHeaders
	Request shared.TerminateWorkspacesRequest `request:"mediaType=application/json"`
}

type TerminateWorkspacesResponse struct {
	ContentType               string
	StatusCode                int64
	TerminateWorkspacesResult *shared.TerminateWorkspacesResult
}
