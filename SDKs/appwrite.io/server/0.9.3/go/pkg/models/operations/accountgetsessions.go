package operations

import (
	"openapi/pkg/models/shared"
)

type AccountGetSessionsSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountGetSessionsRequest struct {
	Security AccountGetSessionsSecurity
}

type AccountGetSessionsResponse struct {
	ContentType string
	StatusCode  int64
	SessionList *shared.SessionList
}
