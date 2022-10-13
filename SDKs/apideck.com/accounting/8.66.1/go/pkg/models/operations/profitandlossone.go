package operations

import (
	"openapi/pkg/models/shared"
)

type ProfitAndLossOneQueryParams struct {
	Filter *shared.ProfitAndLossFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Raw    *bool                       `queryParam:"style=form,explode=true,name=raw"`
}

type ProfitAndLossOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ProfitAndLossOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ProfitAndLossOneRequest struct {
	QueryParams ProfitAndLossOneQueryParams
	Headers     ProfitAndLossOneHeaders
	Security    ProfitAndLossOneSecurity
}

type ProfitAndLossOneResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	GetProfitAndLossResponse *shared.GetProfitAndLossResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
