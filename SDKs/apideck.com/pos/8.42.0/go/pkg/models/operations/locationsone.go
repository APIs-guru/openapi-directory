package operations

import (
	"openapi/pkg/models/shared"
)

type LocationsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type LocationsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type LocationsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type LocationsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type LocationsOneRequest struct {
	PathParams  LocationsOnePathParams
	QueryParams LocationsOneQueryParams
	Headers     LocationsOneHeaders
	Security    LocationsOneSecurity
}

type LocationsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetLocationResponse     *shared.GetLocationResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
