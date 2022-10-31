package operations

import (
	"openapi/pkg/models/shared"
)

type ActivityListReceivedPublicEventsForUserPathParams struct {
	Username string `pathParam:"style=simple,explode=false,name=username"`
}

type ActivityListReceivedPublicEventsForUserQueryParams struct {
	Page    *int64 `queryParam:"style=form,explode=true,name=page"`
	PerPage *int64 `queryParam:"style=form,explode=true,name=per_page"`
}

type ActivityListReceivedPublicEventsForUserRequest struct {
	PathParams  ActivityListReceivedPublicEventsForUserPathParams
	QueryParams ActivityListReceivedPublicEventsForUserQueryParams
}

type ActivityListReceivedPublicEventsForUserResponse struct {
	ContentType string
	StatusCode  int64
	Events      []shared.Event
}
