package operations

import (
	"openapi/pkg/models/shared"
)

type LogsAllQueryParams struct {
	Cursor *string            `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.LogsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64             `queryParam:"style=form,explode=true,name=limit"`
}

type LogsAllHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type LogsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LogsAllRequest struct {
	QueryParams LogsAllQueryParams
	Headers     LogsAllHeaders
	Security    LogsAllSecurity
}

type LogsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetLogsResponse         *shared.GetLogsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
