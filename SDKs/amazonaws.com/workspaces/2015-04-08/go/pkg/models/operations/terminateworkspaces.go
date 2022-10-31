package operations

import (
	"openapi/pkg/models/shared"
)

type TerminateWorkspacesXAmzTargetEnum string

const (
	TerminateWorkspacesXAmzTargetEnumWorkspacesServiceTerminateWorkspaces TerminateWorkspacesXAmzTargetEnum = "WorkspacesService.TerminateWorkspaces"
)

type TerminateWorkspacesHeaders struct {
	XAmzAlgorithm     *string                           `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                           `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                           `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                           `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                           `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                           `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                           `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        TerminateWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
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
