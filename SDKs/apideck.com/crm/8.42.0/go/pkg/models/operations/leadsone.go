package operations

import (
	"openapi/pkg/models/shared"
)

type LeadsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LeadsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LeadsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LeadsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LeadsOneRequest struct {
	PathParams  LeadsOnePathParams
	QueryParams LeadsOneQueryParams
	Headers     LeadsOneHeaders
	Security    LeadsOneSecurity
}

type LeadsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetLeadResponse         *shared.GetLeadResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
