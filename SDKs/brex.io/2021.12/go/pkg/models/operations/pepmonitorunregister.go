package operations

import (
	"openapi/pkg/models/shared"
)

type PepMonitorUnregisterPathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PepMonitorUnregisterSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type PepMonitorUnregisterRequest struct {
	PathParams PepMonitorUnregisterPathParams
	Security   PepMonitorUnregisterSecurity
}

type PepMonitorUnregisterResponse struct {
	ContentType                                   string
	PepMonitorUnregister200ApplicationJSONAny     *interface{}
	PepMonitorUnregisterDefaultApplicationJSONAny *interface{}
	StatusCode                                    int64
}
