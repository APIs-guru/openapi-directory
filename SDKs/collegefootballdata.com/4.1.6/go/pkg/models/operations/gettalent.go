package operations

import (
	"openapi/pkg/models/shared"
)

type GetTalentQueryParams struct {
	Year *int64 `queryParam:"style=form,explode=true,name=year"`
}

type GetTalentRequest struct {
	QueryParams GetTalentQueryParams
}

type GetTalentResponse struct {
	ContentType string
	StatusCode  int64
	TeamTalents []shared.TeamTalent
}
