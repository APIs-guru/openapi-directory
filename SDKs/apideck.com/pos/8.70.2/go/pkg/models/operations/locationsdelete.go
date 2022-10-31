package operations

import (
	"openapi/pkg/models/shared"
)

type LocationsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LocationsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LocationsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type LocationsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LocationsDeleteRequest struct {
	PathParams  LocationsDeletePathParams
	QueryParams LocationsDeleteQueryParams
	Headers     LocationsDeleteHeaders
	Security    LocationsDeleteSecurity
}

type LocationsDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteLocationResponse  *shared.DeleteLocationResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
