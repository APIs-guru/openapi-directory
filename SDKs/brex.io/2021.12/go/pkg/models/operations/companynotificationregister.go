package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyNotificationRegisterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyNotificationRegisterRequestBody struct {
	CallbackURL string `form:"name=callbackUrl"`
}

type CompanyNotificationRegisterSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyNotificationRegisterRequest struct {
	PathParams CompanyNotificationRegisterPathParams
	Request    *CompanyNotificationRegisterRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CompanyNotificationRegisterSecurity
}

type CompanyNotificationRegisterResponse struct {
	CompanyNotificationRegister200ApplicationJSONAny     *interface{}
	CompanyNotificationRegisterDefaultApplicationJSONAny *interface{}
	ContentType                                          string
	StatusCode                                           int64
}
