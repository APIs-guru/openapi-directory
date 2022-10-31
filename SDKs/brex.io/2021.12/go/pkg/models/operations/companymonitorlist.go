package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyMonitorListSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyMonitorListRequest struct {
	Security CompanyMonitorListSecurity
}

type CompanyMonitorListResponse struct {
	CompanyMonitorList200ApplicationJSONAnies   []interface{}
	CompanyMonitorListDefaultApplicationJSONAny *interface{}
	ContentType                                 string
	StatusCode                                  int64
}
