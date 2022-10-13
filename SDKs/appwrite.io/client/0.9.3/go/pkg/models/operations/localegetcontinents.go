package operations

import (
	"openapi/pkg/models/shared"
)

type LocaleGetContinentsSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type LocaleGetContinentsRequest struct {
	Security LocaleGetContinentsSecurity
}

type LocaleGetContinentsResponse struct {
	ContentType   string
	StatusCode    int64
	ContinentList *shared.ContinentList
}
