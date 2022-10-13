package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ActivitiesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesAllRequest struct {
	QueryParams ActivitiesAllQueryParams
	Headers     ActivitiesAllHeaders
	Security    ActivitiesAllSecurity
}

type ActivitiesAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetActivitiesResponse   *shared.GetActivitiesResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
