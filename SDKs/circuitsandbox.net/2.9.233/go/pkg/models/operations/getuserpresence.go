package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserPresencePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type GetUserPresenceSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type GetUserPresenceRequest struct {
	PathParams GetUserPresencePathParams
	Security   GetUserPresenceSecurity
}

type GetUserPresenceResponse struct {
	Body        []byte
	ContentType string
	Presence    *interface{}
	StatusCode  int64
}
