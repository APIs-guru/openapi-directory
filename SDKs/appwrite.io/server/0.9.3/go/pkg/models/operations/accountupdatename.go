package operations

import (
	"openapi/pkg/models/shared"
)

type AccountUpdateNameRequestBody struct {
	Name string `json:"name"`
}

type AccountUpdateNameSecurity struct {
	Jwt     shared.SchemeJwt     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type AccountUpdateNameRequest struct {
	Request  *AccountUpdateNameRequestBody `request:"mediaType=application/json"`
	Security AccountUpdateNameSecurity
}

type AccountUpdateNameResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
