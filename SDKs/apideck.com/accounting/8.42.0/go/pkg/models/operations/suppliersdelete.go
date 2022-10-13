package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SuppliersDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SuppliersDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type SuppliersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SuppliersDeleteRequest struct {
	PathParams  SuppliersDeletePathParams
	QueryParams SuppliersDeleteQueryParams
	Headers     SuppliersDeleteHeaders
	Security    SuppliersDeleteSecurity
}

type SuppliersDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteSupplierResponse  *shared.DeleteSupplierResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
