package operations

import (
	"openapi/pkg/models/shared"
)

type LeadsAllQueryParams struct {
	Cursor *string             `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.LeadsFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64              `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool               `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.LeadsSort   `queryParam:"style=deepObject,explode=true,name=sort"`
}

type LeadsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LeadsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LeadsAllRequest struct {
	QueryParams LeadsAllQueryParams
	Headers     LeadsAllHeaders
	Security    LeadsAllSecurity
}

type LeadsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetLeadsResponse        *shared.GetLeadsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
