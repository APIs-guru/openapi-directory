package operations

import (
	"openapi/pkg/models/shared"
)

type TeamsCreateRequestBody struct {
	Name  string   `json:"name"`
	Roles []string `json:"roles,omitempty"`
}

type TeamsCreateSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type TeamsCreateRequest struct {
	Request  *TeamsCreateRequestBody `request:"mediaType=application/json"`
	Security TeamsCreateSecurity
}

type TeamsCreateResponse struct {
	ContentType string
	StatusCode  int64
	Team        *shared.Team
}
