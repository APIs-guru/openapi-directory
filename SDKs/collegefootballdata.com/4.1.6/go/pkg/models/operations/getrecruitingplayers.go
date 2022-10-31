package operations

import (
	"openapi/pkg/models/shared"
)

type GetRecruitingPlayersQueryParams struct {
	Classification *string `queryParam:"style=form,explode=true,name=classification"`
	Position       *string `queryParam:"style=form,explode=true,name=position"`
	State          *string `queryParam:"style=form,explode=true,name=state"`
	Team           *string `queryParam:"style=form,explode=true,name=team"`
	Year           *int64  `queryParam:"style=form,explode=true,name=year"`
}

type GetRecruitingPlayersRequest struct {
	QueryParams GetRecruitingPlayersQueryParams
}

type GetRecruitingPlayersResponse struct {
	ContentType string
	Recruits    []shared.Recruit
	StatusCode  int64
}
