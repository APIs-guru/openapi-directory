package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsProgramPathParams struct {
	MarketplaceID       string `pathParam:"style=simple,explode=false,name=marketplace_id"`
	PaymentsProgramType string `pathParam:"style=simple,explode=false,name=payments_program_type"`
}

type GetPaymentsProgramSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetPaymentsProgramRequest struct {
	PathParams GetPaymentsProgramPathParams
	Security   GetPaymentsProgramSecurity
}

type GetPaymentsProgramResponse struct {
	ContentType             string
	PaymentsProgramResponse *shared.PaymentsProgramResponse
	StatusCode              int64
}
