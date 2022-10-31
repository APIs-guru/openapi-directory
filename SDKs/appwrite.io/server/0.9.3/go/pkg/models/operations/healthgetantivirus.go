package operations

import (
	"openapi/pkg/models/shared"
)

type HealthGetAntiVirusSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type HealthGetAntiVirusRequest struct {
	Security HealthGetAntiVirusSecurity
}

type HealthGetAntiVirusResponse struct {
	ContentType string
	StatusCode  int64
}
