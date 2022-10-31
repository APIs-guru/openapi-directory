package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListWatchedReposForAuthenticatedUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActivityListWatchedReposForAuthenticatedUserRequest struct {
	QueryParams ActivityListWatchedReposForAuthenticatedUserQueryParams
}

type ActivityListWatchedReposForAuthenticatedUserResponse struct {
	ContentType         string
	Headers             map[string][]string
	StatusCode          int64
	BasicError          *shared.BasicError
	MinimalRepositories []shared.MinimalRepository
}
