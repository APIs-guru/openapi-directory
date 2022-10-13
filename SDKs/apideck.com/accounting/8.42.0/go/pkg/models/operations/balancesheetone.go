package operations

import (
	"openapi/pkg/models/shared"
)

type BalanceSheetOneQueryParams struct {
	Filter      *shared.BalanceSheetFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	PassThrough map[string]interface{}     `queryParam:"style=deepObject,explode=true,name=pass_through"`
	Raw         *bool                      `queryParam:"style=form,explode=true,name=raw"`
}

type BalanceSheetOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type BalanceSheetOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type BalanceSheetOneRequest struct {
	QueryParams BalanceSheetOneQueryParams
	Headers     BalanceSheetOneHeaders
	Security    BalanceSheetOneSecurity
}

type BalanceSheetOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetBalanceSheetResponse *shared.GetBalanceSheetResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
