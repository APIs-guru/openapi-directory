package operations

import (
	"openapi/pkg/models/shared"
)

type PepMonitorListSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type PepMonitorListRequest struct {
	Security PepMonitorListSecurity
}

type PepMonitorListResponse struct {
	ContentType                             string
	PepMonitorList200ApplicationJSONAnies   []interface{}
	PepMonitorListDefaultApplicationJSONAny *interface{}
	StatusCode                              int64
}
