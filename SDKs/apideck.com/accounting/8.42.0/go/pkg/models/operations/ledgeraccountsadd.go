package operations

import (
	"openapi/pkg/models/shared"
)

type LedgerAccountsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LedgerAccountsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LedgerAccountsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LedgerAccountsAddRequest struct {
	QueryParams LedgerAccountsAddQueryParams
	Headers     LedgerAccountsAddHeaders
	Request     map[string]interface{} `request:"mediaType=application/json"`
	Security    LedgerAccountsAddSecurity
}

type LedgerAccountsAddResponse struct {
	BadRequestResponse          *interface{}
	ContentType                 string
	CreateLedgerAccountResponse *shared.CreateLedgerAccountResponse
	NotFoundResponse            *interface{}
	PaymentRequiredResponse     *interface{}
	StatusCode                  int64
	UnauthorizedResponse        *interface{}
	UnexpectedErrorResponse     *interface{}
	UnprocessableResponse       *interface{}
}
