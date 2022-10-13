package operations

import (
	"openapi/pkg/models/shared"
)

type TimeOffRequestsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TimeOffRequestsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TimeOffRequestsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TimeOffRequestsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TimeOffRequestsDeleteRequest struct {
	PathParams  TimeOffRequestsDeletePathParams
	QueryParams TimeOffRequestsDeleteQueryParams
	Headers     TimeOffRequestsDeleteHeaders
	Security    TimeOffRequestsDeleteSecurity
}

type TimeOffRequestsDeleteResponse struct {
	BadRequestResponse           *shared.BadRequestResponse
	ContentType                  string
	DeleteTimeOffRequestResponse *shared.DeleteTimeOffRequestResponse
	NotFoundResponse             *shared.NotFoundResponse
	PaymentRequiredResponse      *shared.PaymentRequiredResponse
	StatusCode                   int64
	UnauthorizedResponse         *shared.UnauthorizedResponse
	UnexpectedErrorResponse      *shared.UnexpectedErrorResponse
	UnprocessableResponse        *shared.UnprocessableResponse
}
