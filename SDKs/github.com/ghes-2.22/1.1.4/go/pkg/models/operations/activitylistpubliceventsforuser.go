package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListPublicEventsForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ActivityListPublicEventsForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActivityListPublicEventsForUserRequest struct {
	PathParams  ActivityListPublicEventsForUserPathParams
	QueryParams ActivityListPublicEventsForUserQueryParams
}

type ActivityListPublicEventsForUserResponse struct {
	ContentType string
	StatusCode  int64
	Events      []shared.Event
}
