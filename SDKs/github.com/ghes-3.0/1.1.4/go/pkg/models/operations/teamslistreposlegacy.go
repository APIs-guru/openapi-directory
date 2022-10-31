package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsListReposLegacyPathParams struct {
	TeamID int64 `pathParam:"style=simple,explode=false,name=team_id"`
}

type TeamsListReposLegacyQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type TeamsListReposLegacyRequest struct {
	PathParams  TeamsListReposLegacyPathParams
	QueryParams TeamsListReposLegacyQueryParams
}

type TeamsListReposLegacyResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	BasicError          *shared.BasicError
	MinimalRepositories []shared.MinimalRepository
}
