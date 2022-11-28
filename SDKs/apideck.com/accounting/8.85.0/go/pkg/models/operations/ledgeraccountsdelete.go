package operations

import (
	"openapi/pkg/models/shared"
)

type LedgerAccountsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LedgerAccountsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LedgerAccountsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type LedgerAccountsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LedgerAccountsDeleteRequest struct {
	PathParams  LedgerAccountsDeletePathParams
	QueryParams LedgerAccountsDeleteQueryParams
	Headers     LedgerAccountsDeleteHeaders
	Security    LedgerAccountsDeleteSecurity
}

type LedgerAccountsDeleteResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	DeleteLedgerAccountResponse *shared.DeleteLedgerAccountResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
