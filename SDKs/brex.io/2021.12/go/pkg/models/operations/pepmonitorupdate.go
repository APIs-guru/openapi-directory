package operations

import (
	"openapi/pkg/models/shared"
)

type PepMonitorUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PepMonitorUpdateRequestBody struct {
	Webhook *string `form:"name=Webhook"`
}

type PepMonitorUpdateSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type PepMonitorUpdateRequest struct {
	PathParams PepMonitorUpdatePathParams
	Request    *PepMonitorUpdateRequestBody `request:"mediaType=application/x-www-form-urlencoded"`
	Security   PepMonitorUpdateSecurity
}

type PepMonitorUpdateResponse struct {
	ContentType                               string
	PepMonitorUpdate200ApplicationJSONAny     *interface{}
	PepMonitorUpdateDefaultApplicationJSONAny *interface{}
	StatusCode                                int64
}
