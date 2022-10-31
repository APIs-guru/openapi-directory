package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeSubscriptionsSubscriptionHandlePathParams struct {
	SubscriptionHandle string `pathParam:"style=simple,explode=false,name=subscriptionHandle"`
}

type GetUsersMeSubscriptionsSubscriptionHandleSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeSubscriptionsSubscriptionHandleRequest struct {
	PathParams GetUsersMeSubscriptionsSubscriptionHandlePathParams
	Security   GetUsersMeSubscriptionsSubscriptionHandleSecurity
}

type GetUsersMeSubscriptionsSubscriptionHandleResponse struct {
	ContentType  string
	StatusCode   int64
	VideoChannel *interface{}
}
