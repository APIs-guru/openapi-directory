package operations

import (
	"openapi/pkg/models/shared"
)

type TendersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TendersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TendersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TendersAddRequest struct {
	QueryParams TendersAddQueryParams
	Headers     TendersAddHeaders
	Request     shared.Tender `request:"mediaType=application/json"`
	Security    TendersAddSecurity
}

type TendersAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateTenderResponse    *shared.CreateTenderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
