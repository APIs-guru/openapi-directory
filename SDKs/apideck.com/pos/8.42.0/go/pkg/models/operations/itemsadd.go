package operations

import (
	"openapi/pkg/models/shared"
)

type ItemsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ItemsAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ItemsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ItemsAddRequest struct {
	QueryParams ItemsAddQueryParams
	Headers     ItemsAddHeaders
	Request     shared.Item `request:"mediaType=application/json"`
	Security    ItemsAddSecurity
}

type ItemsAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateItemResponse      *shared.CreateItemResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
