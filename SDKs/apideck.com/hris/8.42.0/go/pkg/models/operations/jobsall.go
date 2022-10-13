package operations

import (
	"openapi/pkg/models/shared"
)

type JobsAllPathParams struct {
	EmployeeID string `pathParam:"style=simple,explode=false,name=employee_id"`
}

type JobsAllQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type JobsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type JobsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type JobsAllRequest struct {
	PathParams  JobsAllPathParams
	QueryParams JobsAllQueryParams
	Headers     JobsAllHeaders
	Security    JobsAllSecurity
}

type JobsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetHrisJobsResponse     *shared.GetHrisJobsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
