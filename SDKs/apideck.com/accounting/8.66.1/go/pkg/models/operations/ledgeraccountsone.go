package operations

import (
	"openapi/pkg/models/shared"
)

type LedgerAccountsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LedgerAccountsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LedgerAccountsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LedgerAccountsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LedgerAccountsOneRequest struct {
	PathParams  LedgerAccountsOnePathParams
	QueryParams LedgerAccountsOneQueryParams
	Headers     LedgerAccountsOneHeaders
	Security    LedgerAccountsOneSecurity
}

type LedgerAccountsOneResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	GetLedgerAccountResponse *shared.GetLedgerAccountResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
