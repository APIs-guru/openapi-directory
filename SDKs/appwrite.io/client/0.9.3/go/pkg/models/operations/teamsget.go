package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsGetPathParams struct {
	TeamID string `pathParam:"style=simple,explode=false,name=teamId"`
}

type TeamsGetSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type TeamsGetRequest struct {
	PathParams TeamsGetPathParams
	Security   TeamsGetSecurity
}

type TeamsGetResponse struct {
	ContentType string
	StatusCode  int64
	Team        *shared.Team
}
