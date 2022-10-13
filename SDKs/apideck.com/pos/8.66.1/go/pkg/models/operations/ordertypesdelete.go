package operations

import (
	"openapi/pkg/models/shared"
)

type OrderTypesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OrderTypesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OrderTypesDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OrderTypesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OrderTypesDeleteRequest struct {
	PathParams  OrderTypesDeletePathParams
	QueryParams OrderTypesDeleteQueryParams
	Headers     OrderTypesDeleteHeaders
	Security    OrderTypesDeleteSecurity
}

type OrderTypesDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteOrderTypeResponse *shared.DeleteOrderTypeResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
