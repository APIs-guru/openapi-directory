package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeSubscriptionsQueryParams struct {
	Count *int64  `queryParam:"style=form,explode=true,name=count"`
	Sort  *string `queryParam:"style=form,explode=true,name=sort"`
	Start *int64  `queryParam:"style=form,explode=true,name=start"`
}

type GetUsersMeSubscriptionsSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeSubscriptionsRequest struct {
	QueryParams GetUsersMeSubscriptionsQueryParams
	Security    GetUsersMeSubscriptionsSecurity
}

type GetUsersMeSubscriptionsResponse struct {
	ContentType      string
	StatusCode       int64
	VideoChannelList *interface{}
}
