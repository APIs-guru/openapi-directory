package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyMonitorRegisterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyMonitorRegisterRequestBody struct {
	CallbackURL string `form:"name=callbackUrl"`
	ChangeType  string `form:"name=changeType"`
}

type CompanyMonitorRegisterSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyMonitorRegisterRequest struct {
	PathParams CompanyMonitorRegisterPathParams
	Request    *CompanyMonitorRegisterRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   CompanyMonitorRegisterSecurity
}

type CompanyMonitorRegisterResponse struct {
	CompanyMonitorRegister200ApplicationJSONAny     *interface{}
	CompanyMonitorRegisterDefaultApplicationJSONAny *interface{}
	ContentType                                     string
	StatusCode                                      int64
}
