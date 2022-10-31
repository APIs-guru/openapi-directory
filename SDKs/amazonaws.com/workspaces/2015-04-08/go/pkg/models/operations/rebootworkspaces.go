package operations

import (
	"openapi/pkg/models/shared"
)

type RebootWorkspacesXAmzTargetEnum string

const (
	RebootWorkspacesXAmzTargetEnumWorkspacesServiceRebootWorkspaces RebootWorkspacesXAmzTargetEnum = "WorkspacesService.RebootWorkspaces"
)

type RebootWorkspacesHeaders struct {
	XAmzAlgorithm     *string                        `header:"style=simple,explode=false,name=X-Amz-Algorithm"`
	XAmzContentSha256 *string                        `header:"style=simple,explode=false,name=X-Amz-Content-Sha256"`
	XAmzCredential    *string                        `header:"style=simple,explode=false,name=X-Amz-Credential"`
	XAmzDate          *string                        `header:"style=simple,explode=false,name=X-Amz-Date"`
	XAmzSecurityToken *string                        `header:"style=simple,explode=false,name=X-Amz-Security-Token"`
	XAmzSignature     *string                        `header:"style=simple,explode=false,name=X-Amz-Signature"`
	XAmzSignedHeaders *string                        `header:"style=simple,explode=false,name=X-Amz-SignedHeaders"`
	XAmzTarget        RebootWorkspacesXAmzTargetEnum `header:"style=simple,explode=false,name=X-Amz-Target"`
}

type RebootWorkspacesRequest struct {
	Headers RebootWorkspacesHeaders
	Request shared.RebootWorkspacesRequest `request:"mediaType=application/json"`
}

type RebootWorkspacesResponse struct {
	ContentType            string
	RebootWorkspacesResult *shared.RebootWorkspacesResult
	StatusCode             int64
}
