package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsDeletePathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type TeamsDeleteSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type TeamsDeleteRequest struct {
	PathParams TeamsDeletePathParams
	Security   TeamsDeleteSecurity
}

type TeamsDeleteResponse struct {
	ContentType string
	StatusCode  int64
}
