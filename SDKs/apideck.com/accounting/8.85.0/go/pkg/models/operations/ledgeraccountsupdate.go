package operations

import (
	"openapi/pkg/models/shared"
)

type LedgerAccountsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LedgerAccountsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LedgerAccountsUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type LedgerAccountsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LedgerAccountsUpdateRequest struct {
	PathParams  LedgerAccountsUpdatePathParams
	QueryParams LedgerAccountsUpdateQueryParams
	Headers     LedgerAccountsUpdateHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    LedgerAccountsUpdateSecurity
}

type LedgerAccountsUpdateResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
	UpdateLedgerAccountResponse *shared.UpdateLedgerAccountResponse
}
