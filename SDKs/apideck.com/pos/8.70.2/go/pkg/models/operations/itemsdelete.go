package operations

import (
	"openapi/pkg/models/shared"
)

type ItemsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ItemsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ItemsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ItemsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ItemsDeleteRequest struct {
	PathParams  ItemsDeletePathParams
	QueryParams ItemsDeleteQueryParams
	Headers     ItemsDeleteHeaders
	Security    ItemsDeleteSecurity
}

type ItemsDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteItemResponse      *shared.DeleteItemResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
