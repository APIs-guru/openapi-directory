package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListPublicOrgEventsPathParams struct {
	Org string `pathParam:"style=simple,explode=false,name=org"`
}

type ActivityListPublicOrgEventsQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActivityListPublicOrgEventsRequest struct {
	PathParams  ActivityListPublicOrgEventsPathParams
	QueryParams ActivityListPublicOrgEventsQueryParams
}

type ActivityListPublicOrgEventsResponse struct {
	ContentType string
	StatusCode  int64
	Events      []shared.Event
}
