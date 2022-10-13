package operations

import (
	"openapi/pkg/models/shared"
)

type GetFbsTeamsQueryParams struct {
	Year *int64 `queryParam:"style=form,explode=true,name=year"`
}

type GetFbsTeamsRequest struct {
	QueryParams GetFbsTeamsQueryParams
}

type GetFbsTeamsResponse struct {
	ContentType string
	StatusCode  int64
	Teams       []shared.Team
}
