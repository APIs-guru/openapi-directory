package operations

import (
	"openapi/pkg/models/shared"
)

type PostAbusesRequestBodyAccount struct {
	ID *int64 `json:"id"`
}

type PostAbusesRequestBodyComment struct {
	ID *int64 `json:"id"`
}

type PostAbusesRequestBodyVideo struct {
	EndAt   *int64 `json:"endAt"`
	ID      *int64 `json:"id"`
	StartAt *int64 `json:"startAt"`
}

type PostAbusesRequestBody struct {
	Account           *PostAbusesRequestBodyAccount       `json:"account"`
	Comment           *PostAbusesRequestBodyComment       `json:"comment"`
	PredefinedReasons []shared.PredefinedAbuseReasonsEnum `json:"predefinedReasons"`
	Reason            string                              `json:"reason"`
	Video             *PostAbusesRequestBodyVideo         `json:"video"`
}

type PostAbusesSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PostAbusesRequest struct {
	Request  PostAbusesRequestBody `request:"mediaType=application/json"`
	Security PostAbusesSecurity
}

type PostAbuses200ApplicationJSONAbuse struct {
	ID *int64 `json:"id"`
}

type PostAbuses200ApplicationJSON struct {
	Abuse *PostAbuses200ApplicationJSONAbuse `json:"abuse"`
}

type PostAbusesResponse struct {
	ContentType                        string
	PostAbuses200ApplicationJSONObject *PostAbuses200ApplicationJSON
	StatusCode                         int64
}
