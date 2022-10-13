package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyMonitorUnregisterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type CompanyMonitorUnregisterSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyMonitorUnregisterRequest struct {
	PathParams CompanyMonitorUnregisterPathParams
	Security   CompanyMonitorUnregisterSecurity
}

type CompanyMonitorUnregisterResponse struct {
	CompanyMonitorUnregisterDefaultApplicationJSONAny *interface{}
	ContentType                                       string
	StatusCode                                        int64
}
