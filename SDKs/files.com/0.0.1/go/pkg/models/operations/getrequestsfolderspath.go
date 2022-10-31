package operations

import (
	"openapi/pkg/models/shared"
)

type GetRequestsFoldersPathPathParams struct {
	Path string `pathParam:"style=simple,explode=false,name=path"`
}

type GetRequestsFoldersPathQueryParams struct {
	Cursor  *string                `queryParam:"style=form,explode=true,name=cursor"`
	Mine    *bool                  `queryParam:"style=form,explode=true,name=mine"`
	PerPage *int32                 `queryParam:"style=form,explode=true,name=per_page"`
	SortBy  map[string]interface{} `queryParam:"style=form,explode=true,name=sort_by"`
}

type GetRequestsFoldersPathRequest struct {
	PathParams  GetRequestsFoldersPathPathParams
	QueryParams GetRequestsFoldersPathQueryParams
}

type GetRequestsFoldersPathResponse struct {
	ContentType     string
	RequestEntities []shared.RequestEntity
	StatusCode      int64
}
