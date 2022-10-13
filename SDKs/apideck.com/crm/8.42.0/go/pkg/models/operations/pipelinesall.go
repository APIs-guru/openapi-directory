package operations

import (
	"openapi/pkg/models/shared"
)

type PipelinesAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type PipelinesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PipelinesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PipelinesAllRequest struct {
	QueryParams PipelinesAllQueryParams
	Headers     PipelinesAllHeaders
	Security    PipelinesAllSecurity
}

type PipelinesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetPipelinesResponse    *shared.GetPipelinesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
