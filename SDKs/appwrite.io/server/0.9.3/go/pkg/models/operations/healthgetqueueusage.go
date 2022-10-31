package operations

import (
	"openapi/pkg/models/shared"
)

type HealthGetQueueUsageSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type HealthGetQueueUsageRequest struct {
	Security HealthGetQueueUsageSecurity
}

type HealthGetQueueUsageResponse struct {
	ContentType string
	StatusCode  int64
}
