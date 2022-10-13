package operations

import (
	"openapi/pkg/models/shared"
)

type LeadsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LeadsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LeadsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LeadsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LeadsDeleteRequest struct {
	PathParams  LeadsDeletePathParams
	QueryParams LeadsDeleteQueryParams
	Headers     LeadsDeleteHeaders
	Security    LeadsDeleteSecurity
}

type LeadsDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteLeadResponse      *shared.DeleteLeadResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
