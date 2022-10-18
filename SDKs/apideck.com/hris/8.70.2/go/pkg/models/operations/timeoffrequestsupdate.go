package operations

import (
	"openapi/pkg/models/shared"
)

type TimeOffRequestsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TimeOffRequestsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TimeOffRequestsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TimeOffRequestsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TimeOffRequestsUpdateRequest struct {
	PathParams  TimeOffRequestsUpdatePathParams
	QueryParams TimeOffRequestsUpdateQueryParams
	Headers     TimeOffRequestsUpdateHeaders
	Request     shared.TimeOffRequest `request:"mediaType=application/json"`
	Security    TimeOffRequestsUpdateSecurity
}

type TimeOffRequestsUpdateResponse struct {
	BadRequestResponse           *shared.BadRequestResponse
	ContentType                  string
	NotFoundResponse             *shared.NotFoundResponse
	PaymentRequiredResponse      *shared.PaymentRequiredResponse
	StatusCode                   int64
	UnauthorizedResponse         *shared.UnauthorizedResponse
	UnexpectedErrorResponse      *shared.UnexpectedErrorResponse
	UnprocessableResponse        *shared.UnprocessableResponse
	UpdateTimeOffRequestResponse *shared.UpdateTimeOffRequestResponse
}
