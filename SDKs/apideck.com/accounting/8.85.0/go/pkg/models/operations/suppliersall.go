package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type SuppliersAllHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SuppliersAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SuppliersAllRequest struct {
	QueryParams SuppliersAllQueryParams
	Headers     SuppliersAllHeaders
	Security    SuppliersAllSecurity
}

type SuppliersAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetSuppliersResponse    *shared.GetSuppliersResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
