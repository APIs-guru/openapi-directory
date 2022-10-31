package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeSubscriptionsExistQueryParams struct {
	Uris []string `queryParam:"style=form,explode=true,name=uris"`
}

type GetUsersMeSubscriptionsExistSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeSubscriptionsExistRequest struct {
	QueryParams GetUsersMeSubscriptionsExistQueryParams
	Security    GetUsersMeSubscriptionsExistSecurity
}

type GetUsersMeSubscriptionsExistResponse struct {
	ContentType                                          string
	GetUsersMeSubscriptionsExist200ApplicationJSONObject map[string]interface{}
	StatusCode                                           int64
}
