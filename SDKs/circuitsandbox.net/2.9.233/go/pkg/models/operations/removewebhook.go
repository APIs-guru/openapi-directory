package operations

import (
	"openapi/pkg/models/shared"
)

type RemoveWebHookPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type RemoveWebHookSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type RemoveWebHookRequest struct {
	PathParams RemoveWebHookPathParams
	Security   RemoveWebHookSecurity
}

type RemoveWebHookResponse struct {
	ContentType string
	StatusCode  int64
}
