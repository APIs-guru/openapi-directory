package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListRepoEventsPathParams struct {
	Owner string `pathParam:"style=simple,explode=false,name=owner"`
	Repo  string `pathParam:"style=simple,explode=false,name=repo"`
}

type ActivityListRepoEventsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActivityListRepoEventsRequest struct {
	PathParams  ActivityListRepoEventsPathParams
	QueryParams ActivityListRepoEventsQueryParams
}

type ActivityListRepoEventsResponse struct {
	ContentType string
	StatusCode  int64
	Events      []shared.Event
}
