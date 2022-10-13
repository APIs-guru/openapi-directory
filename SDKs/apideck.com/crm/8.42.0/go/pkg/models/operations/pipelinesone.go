package operations

import (
	"openapi/pkg/models/shared"
)

type PipelinesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PipelinesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PipelinesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PipelinesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PipelinesOneRequest struct {
	PathParams  PipelinesOnePathParams
	QueryParams PipelinesOneQueryParams
	Headers     PipelinesOneHeaders
	Security    PipelinesOneSecurity
}

type PipelinesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetPipelineResponse     *shared.GetPipelineResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
