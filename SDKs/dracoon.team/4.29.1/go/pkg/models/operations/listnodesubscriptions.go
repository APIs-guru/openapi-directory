package operations

import (
	"openapi/pkg/models/shared"
)

type ListNodeSubscriptionsQueryParams struct {
	Filter *string `queryParam:"style=form,explode=true,name=filter"`
	Limit  *int32  `queryParam:"style=form,explode=true,name=limit"`
	Offset *int32  `queryParam:"style=form,explode=true,name=offset"`
	Sort   *string `queryParam:"style=form,explode=true,name=sort"`
}

type ListNodeSubscriptionsHeaders struct {
	XSdsAuthToken *string `header:"style=simple,explode=false,name=X-Sds-Auth-Token"`
}

type ListNodeSubscriptionsRequest struct {
	QueryParams ListNodeSubscriptionsQueryParams
	Headers     ListNodeSubscriptionsHeaders
}

type ListNodeSubscriptionsResponse struct {
	ContentType        string
	ErrorResponse      *shared.ErrorResponse
	StatusCode         int64
	SubscribedNodeList *shared.SubscribedNodeList
}
