package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListRepoNotificationsForAuthenticatedUserPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityListRepoNotificationsForAuthenticatedUserQueryParams struct {
	All           *bool   `queryParam:"style=form,explode=true,name=all"`
	Before        *string `queryParam:"style=form,explode=true,name=before"`
	Page          *int64  `queryParam:"style=form,explode=true,name=page"`
	Participating *bool   `queryParam:"style=form,explode=true,name=participating"`
	PerPage       *int64  `queryParam:"style=form,explode=true,name=per_page"`
	Since         *string `queryParam:"style=form,explode=true,name=since"`
}

type ActivityListRepoNotificationsForAuthenticatedUserRequest struct {
	PathParams  ActivityListRepoNotificationsForAuthenticatedUserPathParams
	QueryParams ActivityListRepoNotificationsForAuthenticatedUserQueryParams
}

type ActivityListRepoNotificationsForAuthenticatedUserResponse struct {
	ContentType string
	Headers     map[string][]string
	StatusCode  int64
	Threads     []shared.Thread
}
