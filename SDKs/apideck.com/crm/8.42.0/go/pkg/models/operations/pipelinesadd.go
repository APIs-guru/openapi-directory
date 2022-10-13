package operations

import (
	"openapi/pkg/models/shared"
)

type PipelinesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PipelinesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PipelinesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PipelinesAddRequest struct {
	QueryParams PipelinesAddQueryParams
	Headers     PipelinesAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    PipelinesAddSecurity
}

type PipelinesAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreatePipelineResponse  *shared.CreatePipelineResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
