package operations

import (
	"openapi/pkg/models/shared"
)

type PlayerSearchQueryParams struct {
	Position   *string `queryParam:"style=form,explode=true,name=position"`
	SearchTerm string  `queryParam:"style=form,explode=true,name=searchTerm"`
	Team       *string `queryParam:"style=form,explode=true,name=team"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type PlayerSearchRequest struct {
	QueryParams PlayerSearchQueryParams
}

type PlayerSearchResponse struct {
	ContentType         string
	PlayerSearchResults []shared.PlayerSearchResult
	StatusCode          int64
}
