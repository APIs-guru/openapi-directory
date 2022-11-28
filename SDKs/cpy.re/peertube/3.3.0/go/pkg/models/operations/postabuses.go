package operations

import (
	"openapi/pkg/models/shared"
)

type PostAbusesRequestBodyAccount struct {
	ID *int64 `json:"id,omitempty"`
}

type PostAbusesRequestBodyComment struct {
	ID *int64 `json:"id,omitempty"`
}

type PostAbusesRequestBodyVideo struct {
	EndAt   *int64 `json:"endAt,omitempty"`
	ID      *int64 `json:"id,omitempty"`
	StartAt *int64 `json:"startAt,omitempty"`
}

type PostAbusesRequestBody struct {
	Account           *PostAbusesRequestBodyAccount       `json:"account,omitempty"`
	Comment           *PostAbusesRequestBodyComment       `json:"comment,omitempty"`
	PredefinedReasons []shared.PredefinedAbuseReasonsEnum `json:"predefinedReasons,omitempty"`
	Reason            string                              `json:"reason"`
	Video             *PostAbusesRequestBodyVideo         `json:"video,omitempty"`
}

type PostAbusesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostAbuses200ApplicationJSONAbuse struct {
	ID *int64 `json:"id,omitempty"`
}

type PostAbuses200ApplicationJSON struct {
	Abuse *PostAbuses200ApplicationJSONAbuse `json:"abuse,omitempty"`
}

type PostAbusesRequest struct {
	Request  PostAbusesRequestBody `request:"mediaType=application/json"`
	Security PostAbusesSecurity
}

type PostAbusesResponse struct {
	ContentType                        string
	PostAbuses200ApplicationJSONObject *PostAbuses200ApplicationJSON
	StatusCode                         int64
}
