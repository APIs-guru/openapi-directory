package operations

import (
	"openapi/pkg/models/shared"
)

type ReposListTeamsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ReposListTeamsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ReposListTeamsRequest struct {
	PathParams  ReposListTeamsPathParams
	QueryParams ReposListTeamsQueryParams
}

type ReposListTeamsResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Teams       []shared.Team
}
