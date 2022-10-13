package operations

import (
	"openapi/pkg/models/shared"
)

type UpdatePresenceWebHookPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UpdatePresenceWebHookRequestBody struct {
	URL     *string  `form:"name=url"`
	UserIds []string `form:"name=userIds"`
}

type UpdatePresenceWebHookSecurity struct {
	Oauth shared.SchemeOauth `security:"scheme,type=oauth2"`
}

type UpdatePresenceWebHookRequest struct {
	PathParams UpdatePresenceWebHookPathParams
	Request    *UpdatePresenceWebHookRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   UpdatePresenceWebHookSecurity
}

type UpdatePresenceWebHookResponse struct {
	Body        []byte
	ContentType string
	StatusCode  int64
	WebHook     *interface{}
}
