package operations

import (
	"openapi/pkg/models/shared"
)

type LeadsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LeadsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LeadsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LeadsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LeadsUpdateRequest struct {
	PathParams  LeadsUpdatePathParams
	QueryParams LeadsUpdateQueryParams
	Headers     LeadsUpdateHeaders
	Request     shared.Lead `request:"mediaType=application/json"`
	Security    LeadsUpdateSecurity
}

type LeadsUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateLeadResponse      *shared.UpdateLeadResponse
}
