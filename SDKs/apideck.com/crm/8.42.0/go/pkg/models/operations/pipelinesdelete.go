package operations

import (
	"openapi/pkg/models/shared"
)

type PipelinesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type PipelinesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type PipelinesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type PipelinesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type PipelinesDeleteRequest struct {
	PathParams  PipelinesDeletePathParams
	QueryParams PipelinesDeleteQueryParams
	Headers     PipelinesDeleteHeaders
	Security    PipelinesDeleteSecurity
}

type PipelinesDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeletePipelineResponse  *shared.DeletePipelineResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
