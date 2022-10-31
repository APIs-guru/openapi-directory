package operations

import (
	"openapi/pkg/models/shared"
)

type Destiny2InsertSocketPlugSecurity struct {
	Oauth2 shared.SchemeOauth2 `security:"scheme,type=oauth2"`
}

type Destiny2InsertSocketPlugRequest struct {
	Security Destiny2InsertSocketPlugSecurity
}

type Destiny2InsertSocketPlugResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
}
