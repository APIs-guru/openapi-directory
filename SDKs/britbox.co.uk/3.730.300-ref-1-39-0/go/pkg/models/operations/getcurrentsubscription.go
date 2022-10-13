package operations

import (
	"openapi/pkg/models/shared"
)

type GetCurrentSubscriptionPathParams struct {
	Platform string `pathParam:"style=simple,explode=false,name=platform"`
}

type GetCurrentSubscriptionQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetCurrentSubscriptionSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetCurrentSubscriptionRequest struct {
	PathParams  GetCurrentSubscriptionPathParams
	QueryParams GetCurrentSubscriptionQueryParams
	Security    GetCurrentSubscriptionSecurity
}

type GetCurrentSubscriptionResponse struct {
	ContentType            string
	ItvCurrentSubscription *shared.ItvCurrentSubscription
	ServiceError           *shared.ServiceError
	StatusCode             int64
}
