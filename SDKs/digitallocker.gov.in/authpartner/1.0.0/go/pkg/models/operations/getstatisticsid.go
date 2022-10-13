package operations

import (
	"openapi/pkg/models/shared"
)

type GetStatisticsIDSecurity struct {
	Oauthsecurity shared.SchemeOauthsecurity `security:"scheme,type=oauth2"`
}

type GetStatisticsIDRequest struct {
	Request  *interface{} `request:"mediaType=multipart/form-data"`
	Security GetStatisticsIDSecurity
}

type GetStatisticsID400ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetStatisticsID401ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetStatisticsID500ApplicationJSON struct {
	Error            *string `json:"error"`
	ErrorDescription *string `json:"error_description"`
}

type GetStatisticsIDResponse struct {
	ContentType                             string
	GetStatisticsID400ApplicationJSONObject *GetStatisticsID400ApplicationJSON
	GetStatisticsID401ApplicationJSONObject *GetStatisticsID401ApplicationJSON
	GetStatisticsID500ApplicationJSONObject *GetStatisticsID500ApplicationJSON
	GetStatisticsResponse                   *shared.GetStatisticsResponse
	StatusCode                              int64
}
