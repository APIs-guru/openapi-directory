package operations

import (
	"openapi/pkg/models/shared"
)

type ListDownloadShareSubscriptionsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type ListDownloadShareSubscriptionsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type ListDownloadShareSubscriptionsRequest struct {
	QueryParams ListDownloadShareSubscriptionsQueryParams
	Headers     ListDownloadShareSubscriptionsHeaders
}

type ListDownloadShareSubscriptionsResponse struct {
	ContentType                 string
	ErrorResponse               *shared.ErrorResponse
	StatusCode                  int64
	SubscribedDownloadShareList *shared.SubscribedDownloadShareList
}
