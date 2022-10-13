package operations

import (
	"openapi/pkg/models/shared"
)

type CompanyMonitorChangeTypesListSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type CompanyMonitorChangeTypesListRequest struct {
	Security CompanyMonitorChangeTypesListSecurity
}

type CompanyMonitorChangeTypesListResponse struct {
	CompanyMonitorChangeTypesList200ApplicationJSONStrings []string
	CompanyMonitorChangeTypesListDefaultApplicationJSONAny *interface{}
	ContentType                                            string
	StatusCode                                             int64
}
