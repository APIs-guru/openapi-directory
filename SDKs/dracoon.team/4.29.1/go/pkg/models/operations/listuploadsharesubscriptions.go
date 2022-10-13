package operations

import (
	"openapi/pkg/models/shared"
)

type ListUploadShareSubscriptionsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type ListUploadShareSubscriptionsHeaders struct {
	XSdsAuthToken *string `header:"name=X-Sds-Auth-Token"`
}

type ListUploadShareSubscriptionsRequest struct {
	QueryParams ListUploadShareSubscriptionsQueryParams
	Headers     ListUploadShareSubscriptionsHeaders
}

type ListUploadShareSubscriptionsResponse struct {
	ContentType               string
	ErrorResponse             *shared.ErrorResponse
	StatusCode                int64
	SubscribedUploadShareList *shared.SubscribedUploadShareList
}
