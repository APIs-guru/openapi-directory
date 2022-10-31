package operations

import (
	"openapi/pkg/models/shared"
)

type PutAbusesAbuseIDPathParams struct {
	AbuseID int64 `pathParam:"style=simple,explode=false,name=abuseId"`
}

type PutAbusesAbuseIDRequestBody struct {
	ModerationComment *string `json:"moderationComment,omitempty"`
	State             *int64  `json:"state,omitempty"`
}

type PutAbusesAbuseIDSecurity struct {
	OAuth2 shared.SchemeOAuth2 `security:"scheme,type=oauth2"`
}

type PutAbusesAbuseIDRequest struct {
	PathParams PutAbusesAbuseIDPathParams
	Request    *PutAbusesAbuseIDRequestBody `request:"mediaType=application/json"`
	Security   PutAbusesAbuseIDSecurity
}

type PutAbusesAbuseIDResponse struct {
	ContentType string
	StatusCode  int64
}
