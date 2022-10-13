package operations

import (
	"openapi/pkg/models/shared"
)

type HealthCheckSecurity struct {
	UserKey shared.SchemeUserKey `security:"scheme,type=apiKey,subtype=header"`
}

type HealthCheckRequest struct {
	Security HealthCheckSecurity
}

type HealthCheckResponse struct {
	ContentType                          string
	HealthCheck200ApplicationJSONAnies   []interface{}
	HealthCheckDefaultApplicationJSONAny *interface{}
	StatusCode                           int64
}
