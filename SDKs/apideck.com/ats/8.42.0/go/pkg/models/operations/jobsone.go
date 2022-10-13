package operations

import (
	"openapi/pkg/models/shared"
)

type JobsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type JobsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type JobsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type JobsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JobsOneRequest struct {
	PathParams  JobsOnePathParams
	QueryParams JobsOneQueryParams
	Headers     JobsOneHeaders
	Security    JobsOneSecurity
}

type JobsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetJobResponse          *shared.GetJobResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
