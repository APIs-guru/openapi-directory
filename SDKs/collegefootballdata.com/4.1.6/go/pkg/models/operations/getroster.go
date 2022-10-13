package operations

import (
	"openapi/pkg/models/shared"
)

type GetRosterQueryParams struct {
	Team *string `queryParam:"style=form,explode=true,name=team"`
	Year *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetRosterRequest struct {
	QueryParams GetRosterQueryParams
}

type GetRosterResponse struct {
	ContentType string
	Players     []shared.Player
	StatusCode  int64
}
