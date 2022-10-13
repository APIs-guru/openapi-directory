package operations

import (
	"openapi/pkg/models/shared"
)

type LeadsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LeadsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LeadsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LeadsAddRequest struct {
	QueryParams LeadsAddQueryParams
	Headers     LeadsAddHeaders
	Request     shared.Lead `request:"mediaType=application/json"`
	Security    LeadsAddSecurity
}

type LeadsAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateLeadResponse      *shared.CreateLeadResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
