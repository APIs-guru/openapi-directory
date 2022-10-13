package operations

import (
	"openapi/pkg/models/shared"
)

type GetWorkspacesWorkspaceSearchCodePathParams struct {
	Workspace string `pathParam:"style=simple,explode=false,name=workspace"`
}

type GetWorkspacesWorkspaceSearchCodeQueryParams struct {
	Page        *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagelen     *int32 `queryParam:"style=form,explode=true,name=pagelen"`
	SearchQuery string `queryParam:"style=form,explode=true,name=search_query"`
}

type GetWorkspacesWorkspaceSearchCodeRequest struct {
	PathParams  GetWorkspacesWorkspaceSearchCodePathParams
	QueryParams GetWorkspacesWorkspaceSearchCodeQueryParams
}

type GetWorkspacesWorkspaceSearchCodeResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	SearchResultPage *shared.SearchResultPage
}
