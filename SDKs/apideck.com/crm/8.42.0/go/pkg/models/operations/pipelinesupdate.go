package operations

import (
	"openapi/pkg/models/shared"
)

type PipelinesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PipelinesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PipelinesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PipelinesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PipelinesUpdateRequest struct {
	PathParams  PipelinesUpdatePathParams
	QueryParams PipelinesUpdateQueryParams
	Headers     PipelinesUpdateHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    PipelinesUpdateSecurity
}

type PipelinesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdatePipelineResponse  *shared.UpdatePipelineResponse
}
