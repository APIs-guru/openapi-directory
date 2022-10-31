package operations

import (
	"openapi/pkg/models/shared"
)

type GetPipelineVariablesForUserPathParams struct {
	SelectedUser string `pathParam:"style=simple,explode=false,name=selected_user"`
}

type GetPipelineVariablesForUserRequest struct {
	PathParams GetPipelineVariablesForUserPathParams
}

type GetPipelineVariablesForUserResponse struct {
	ContentType                string
	StatusCode                 int64
	PaginatedPipelineVariables *shared.PaginatedPipelineVariables
}
