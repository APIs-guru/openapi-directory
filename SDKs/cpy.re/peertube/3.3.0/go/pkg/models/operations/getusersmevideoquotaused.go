package operations

import (
	"openapi/pkg/models/shared"
)

type GetUsersMeVideoQuotaUsedSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type GetUsersMeVideoQuotaUsedRequest struct {
	Security GetUsersMeVideoQuotaUsedSecurity
}

type GetUsersMeVideoQuotaUsed200ApplicationJSON struct {
	VideoQuotaUsed      *float64 `json:"videoQuotaUsed,omitempty"`
	VideoQuotaUsedDaily *float64 `json:"videoQuotaUsedDaily,omitempty"`
}

type GetUsersMeVideoQuotaUsedResponse struct {
	ContentType                                      string
	GetUsersMeVideoQuotaUsed200ApplicationJSONObject *GetUsersMeVideoQuotaUsed200ApplicationJSON
	StatusCode                                       int64
}
