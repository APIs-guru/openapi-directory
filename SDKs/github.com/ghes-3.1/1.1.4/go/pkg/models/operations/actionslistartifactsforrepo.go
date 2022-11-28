package operations

import (
	"openapi/pkg/models/shared"
)

type ActionsListArtifactsForRepoPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActionsListArtifactsForRepoQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActionsListArtifactsForRepo200ApplicationJSON struct {
	Artifacts  []shared.Artifact `json:"artifacts"`
	TotalCount int64             `json:"total_count"`
}

type ActionsListArtifactsForRepoRequest struct {
	PathParams  ActionsListArtifactsForRepoPathParams
	QueryParams ActionsListArtifactsForRepoQueryParams
}

type ActionsListArtifactsForRepoResponse struct {
	ContentType                                         string
	Headers                                             map[string][]string
	StatusCode                                          int64
	ActionsListArtifactsForRepo200ApplicationJSONObject *ActionsListArtifactsForRepo200ApplicationJSON
}
