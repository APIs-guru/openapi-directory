package operations

import (
	"openapi/pkg/models/shared"
)

type GetSubscriptionStateQueryParams struct {
	Lang *string `queryParam:"style=form,explode=true,name=lang"`
}

type GetSubscriptionStateSecurity struct {
	AccountAuth shared.SchemeAccountAuth `security:"scheme,type=oauth2"`
}

type GetSubscriptionStateRequest struct {
	QueryParams GetSubscriptionStateQueryParams
	Security    GetSubscriptionStateSecurity
}

type GetSubscriptionStateResponse struct {
	ContentType          string
	ItvSubscriptionState *shared.ItvSubscriptionState
	ServiceError         *shared.ServiceError
	StatusCode           int64
}
