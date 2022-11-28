package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListWorkflowRunArtifactsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
	RunID int64  `pathParam:"style=simple,explode=false,name=run_id"`
}

type ActionsListWorkflowRunArtifactsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListWorkflowRunArtifacts200ApplicationJSON struct {
	Artifacts  []shared.Artifact `json:"artifacts"`
	TotalCount int64             `json:"total_count"`
}

type ActionsListWorkflowRunArtifactsRequest struct {
	PathParams  ActionsListWorkflowRunArtifactsPathParams
	QueryParams ActionsListWorkflowRunArtifactsQueryParams
}

type ActionsListWorkflowRunArtifactsResponse struct {
	ContentType                                             string
	Headers                                                 map[string][]string
	StatusCode                                              int64
	ActionsListWorkflowRunArtifacts200ApplicationJSONObject *ActionsListWorkflowRunArtifacts200ApplicationJSON
}
