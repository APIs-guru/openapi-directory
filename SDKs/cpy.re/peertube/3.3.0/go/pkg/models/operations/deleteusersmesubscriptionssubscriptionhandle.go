package operations

import (
	"openapi/pkg/models/shared"
)

type DeleteUsersMeSubscriptionsSubscriptionHandlePathParams struct {
	SubscriptionHandle string `pathParam:"style=simple,explode=false,name=subscriptionHandle"`
}

type DeleteUsersMeSubscriptionsSubscriptionHandleSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type DeleteUsersMeSubscriptionsSubscriptionHandleRequest struct {
	PathParams DeleteUsersMeSubscriptionsSubscriptionHandlePathParams
	Security   DeleteUsersMeSubscriptionsSubscriptionHandleSecurity
}

type DeleteUsersMeSubscriptionsSubscriptionHandleResponse struct {
	ContentType string
	StatusCode  int64
}
