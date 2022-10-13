package operations

import (
	"openapi/pkg/models/shared"
)

type GetKycSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetKycRequest struct {
	Security GetKycSecurity
}

type GetKycResponse struct {
	ContentType string
	KycResponse *shared.KycResponse
	StatusCode  int64
}
