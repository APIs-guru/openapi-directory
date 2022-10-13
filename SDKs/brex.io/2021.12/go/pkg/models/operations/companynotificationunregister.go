package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyNotificationUnregisterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyNotificationUnregisterSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyNotificationUnregisterRequest struct {
	PathParams CompanyNotificationUnregisterPathParams
	Security   CompanyNotificationUnregisterSecurity
}

type CompanyNotificationUnregisterResponse struct {
	CompanyNotificationUnregisterDefaultApplicationJSONAny *interface{}
	ContentType                                            string
	StatusCode                                             int64
}
