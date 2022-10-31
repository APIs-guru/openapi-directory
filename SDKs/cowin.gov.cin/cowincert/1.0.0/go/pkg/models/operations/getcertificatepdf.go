package operations

import (
	"openapi/pkg/models/shared"
)

type GetCertificatePdfSecurity struct {
	CertAuth shared.SchemeCertAuth `security:"scheme,type=oauth2"`
}

type GetCertificatePdfRequest struct {
	Request  shared.CertificateRequest `request:"mediaType=application/json"`
	Security GetCertificatePdfSecurity
}

type GetCertificatePdfResponse struct {
	ContentType string
	StatusCode  int64
}
