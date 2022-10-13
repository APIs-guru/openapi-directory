package operations

import (
	"openapi/pkg/models/shared"
)

type GetDraftPicksQueryParams struct {
	College    *string `queryParam:"style=form,explode=true,name=college"`
	Conference *string `queryParam:"style=form,explode=true,name=conference"`
	NflTeam    *string `queryParam:"style=form,explode=true,name=nflTeam"`
	Position   *string `queryParam:"style=form,explode=true,name=position"`
	Year       *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetDraftPicksRequest struct {
	QueryParams GetDraftPicksQueryParams
}

type GetDraftPicksResponse struct {
	ContentType string
	DraftPicks  []shared.DraftPick
	StatusCode  int64
}
