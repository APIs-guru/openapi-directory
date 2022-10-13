package operations

import (
	"openapi/pkg/models/shared"
)

type GetPaymentsProgramOnboardingPathParams struct {
	MarketplaceID       string `pathParam:"style=simple,explode=false,name=marketplace_id"`
	PaymentsProgramType string `pathParam:"style=simple,explode=false,name=payments_program_type"`
}

type GetPaymentsProgramOnboardingSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetPaymentsProgramOnboardingRequest struct {
	PathParams GetPaymentsProgramOnboardingPathParams
	Security   GetPaymentsProgramOnboardingSecurity
}

type GetPaymentsProgramOnboardingResponse struct {
	ContentType                       string
	PaymentsProgramOnboardingResponse *shared.PaymentsProgramOnboardingResponse
	StatusCode                        int64
}
