package operations

import (
	"openapi/pkg/models/shared"
)

type UsersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UsersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type UsersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UsersAddRequest struct {
	QueryParams UsersAddQueryParams
	Headers     UsersAddHeaders
	Request     interface{} `request:"mediaType=application/json"`
	Security    UsersAddSecurity
}

type UsersAddResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	CreateUserResponse      *shared.CreateUserResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
