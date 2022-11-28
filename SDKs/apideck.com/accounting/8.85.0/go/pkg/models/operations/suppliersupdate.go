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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type SuppliersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type SuppliersUpdateRequest struct {
	PathParams  SuppliersUpdatePathParams
	QueryParams SuppliersUpdateQueryParams
	Headers     SuppliersUpdateHeaders
	Request     shared.SupplierInput `request:"mediaType=application/json"`
	Security    SuppliersUpdateSecurity
}

type SuppliersUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateSupplierResponse  *shared.UpdateSupplierResponse
}
