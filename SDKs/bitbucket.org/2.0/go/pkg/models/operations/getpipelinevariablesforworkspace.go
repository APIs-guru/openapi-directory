package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineVariablesForWorkspacePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetPipelineVariablesForWorkspaceRequest struct {
	PathParams GetPipelineVariablesForWorkspacePathParams
}

type GetPipelineVariablesForWorkspaceResponse struct {
	ContentType                string
	StatusCode                 int64
	PaginatedPipelineVariables *shared.PaginatedPipelineVariables
}
