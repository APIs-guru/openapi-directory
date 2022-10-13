package operations

import (
	"openapi/pkg/models/shared"
)

type ItemsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ItemsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ItemsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ItemsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ItemsOneRequest struct {
	PathParams  ItemsOnePathParams
	QueryParams ItemsOneQueryParams
	Headers     ItemsOneHeaders
	Security    ItemsOneSecurity
}

type ItemsOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetItemResponse         *shared.GetItemResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
