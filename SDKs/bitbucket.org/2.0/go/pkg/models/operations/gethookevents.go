package operations

import (
	"openapi/pkg/models/shared"
)

type GetHookEventsSecurity struct {
	Oauth2 *shared.SchemeOauth2 `security:"scheme,type=oauth2"`
	Basic  *shared.SchemeBasic  `security:"scheme,type=http,subtype=basic"`
	APIKey *shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type GetHookEventsRequest struct {
	Security GetHookEventsSecurity
}

type GetHookEventsResponse struct {
	ContentType  string
	StatusCode   int64
	SubjectTypes *shared.SubjectTypes
}
