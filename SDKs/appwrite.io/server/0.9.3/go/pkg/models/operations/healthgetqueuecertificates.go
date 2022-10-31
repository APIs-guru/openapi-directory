package operations

import (
	"openapi/pkg/models/shared"
)

type HealthGetQueueCertificatesSecurity struct {
	Key     shared.SchemeKey     `security:"scheme,type=apiKey,subtype=header"`
	Project shared.SchemeProject `security:"scheme,type=apiKey,subtype=header"`
}

type HealthGetQueueCertificatesRequest struct {
	Security HealthGetQueueCertificatesSecurity
}

type HealthGetQueueCertificatesResponse struct {
	ContentType string
	StatusCode  int64
}
