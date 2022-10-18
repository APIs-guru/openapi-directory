package operations

import (
	"openapi/pkg/models/shared"
)

type TimeOffRequestsAllQueryParams struct {
	Cursor *string                       `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.TimeOffRequestsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                        `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                         `queryParam:"style=form,explode=true,name=raw"`
}

type TimeOffRequestsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TimeOffRequestsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TimeOffRequestsAllRequest struct {
	QueryParams TimeOffRequestsAllQueryParams
	Headers     TimeOffRequestsAllHeaders
	Security    TimeOffRequestsAllSecurity
}

type TimeOffRequestsAllResponse struct {
	BadRequestResponse         *shared.BadRequestResponse
	ContentType                string
	GetTimeOffRequestsResponse *shared.GetTimeOffRequestsResponse
	NotFoundResponse           *shared.NotFoundResponse
	PaymentRequiredResponse    *shared.PaymentRequiredResponse
	StatusCode                 int64
	UnauthorizedResponse       *shared.UnauthorizedResponse
	UnexpectedErrorResponse    *shared.UnexpectedErrorResponse
	UnprocessableResponse      *shared.UnprocessableResponse
}
