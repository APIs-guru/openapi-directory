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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse          *interface{}
	ContentType                 string
	DeleteLedgerAccountResponse *shared.DeleteLedgerAccountResponse
	NotFoundResponse            *interface{}
	PaymentRequiredResponse     *interface{}
	StatusCode                  int64
	UnauthorizedResponse        *interface{}
	UnexpectedErrorResponse     *interface{}
	UnprocessableResponse       *interface{}
}
