package operations

import (
	"openapi/pkg/models/shared"
)

type TendersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TendersAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type TendersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TendersAddRequest struct {
	QueryParams TendersAddQueryParams
	Headers     TendersAddHeaders
	Request     shared.TenderInput `request:"mediaType=application/json"`
	Security    TendersAddSecurity
}

type TendersAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateTenderResponse    *shared.CreateTenderResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
