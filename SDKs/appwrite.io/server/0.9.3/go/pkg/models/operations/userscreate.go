package operations

import (
	"openapi/pkg/models/shared"
)

type UsersCreateRequestBody struct {
	Email    string  `json:"email"`
	Name     *string `json:"name"`
	Password string  `json:"password"`
}

type UsersCreateSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type UsersCreateRequest struct {
	Request  *UsersCreateRequestBody `request:"mediaType=application/json"`
	Security UsersCreateSecurity
}

type UsersCreateResponse struct {
	ContentType string
	StatusCode  int64
	User        *shared.User
}
