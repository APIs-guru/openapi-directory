package operations

import (
	"openapi/pkg/models/shared"
)

type SuppliersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type SuppliersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type SuppliersUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type SuppliersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SuppliersUpdateRequest struct {
	PathParams  SuppliersUpdatePathParams
	QueryParams SuppliersUpdateQueryParams
	Headers     SuppliersUpdateHeaders
	Request     shared.Supplier `request:"mediaType=application/json"`
	Security    SuppliersUpdateSecurity
}

type SuppliersUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateSupplierResponse  *shared.UpdateSupplierResponse
}
