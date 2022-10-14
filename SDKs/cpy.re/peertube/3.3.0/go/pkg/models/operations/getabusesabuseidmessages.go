package operations

import (
	"openapi/pkg/models/shared"
)

type GetAbusesAbuseIDMessagesPathParams struct {
	AbuseID int64 `pathParam:"style=simple,explode=false,name=abuseId"`
}

type GetAbusesAbuseIDMessagesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetAbusesAbuseIDMessagesRequest struct {
	PathParams GetAbusesAbuseIDMessagesPathParams
	Security   GetAbusesAbuseIDMessagesSecurity
}

type GetAbusesAbuseIDMessages200ApplicationJSON struct {
	Data  []interface{} `json:"data,omitempty"`
	Total *int64        `json:"total,omitempty"`
}

type GetAbusesAbuseIDMessagesResponse struct {
	ContentType                                      string
	GetAbusesAbuseIDMessages200ApplicationJSONObject *GetAbusesAbuseIDMessages200ApplicationJSON
	StatusCode                                       int64
}
