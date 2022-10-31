package operations

import (
	"openapi/pkg/models/shared"
)

type UsersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type UsersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type UsersUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type UsersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type UsersUpdateRequest struct {
	PathParams  UsersUpdatePathParams
	QueryParams UsersUpdateQueryParams
	Headers     UsersUpdateHeaders
	Request     shared.User `request:"mediaType=application/json"`
	Security    UsersUpdateSecurity
}

type UsersUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateUserResponse      *shared.UpdateUserResponse
}
