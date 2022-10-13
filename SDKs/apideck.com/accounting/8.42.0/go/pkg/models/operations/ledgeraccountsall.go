package operations

import (
	"openapi/pkg/models/shared"
)

type LedgerAccountsAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type LedgerAccountsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LedgerAccountsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LedgerAccountsAllRequest struct {
	QueryParams LedgerAccountsAllQueryParams
	Headers     LedgerAccountsAllHeaders
	Security    LedgerAccountsAllSecurity
}

type LedgerAccountsAllResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	GetLedgerAccountsResponse *shared.GetLedgerAccountsResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
