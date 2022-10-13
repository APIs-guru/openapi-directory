package operations

import (
	"openapi/pkg/models/shared"
)

type SearchAccountPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type SearchAccountQueryParams struct {
	Page        *int32 `queryParam:"style=form,explode=true,name=page"`
	Pagelen     *int32 `queryParam:"style=form,explode=true,name=pagelen"`
	SearchQuery string `queryParam:"style=form,explode=true,name=search_query"`
}

type SearchAccountRequest struct {
	PathParams  SearchAccountPathParams
	QueryParams SearchAccountQueryParams
}

type SearchAccountResponse struct {
	ContentType      string
	StatusCode       int64
	Error            map[string]interface{}
	SearchResultPage *shared.SearchResultPage
}
