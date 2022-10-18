package operations

import (
	"openapi/pkg/models/shared"
)

type ModifiersAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifiersAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ModifiersAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifiersAddRequest struct {
	QueryParams ModifiersAddQueryParams
	Headers     ModifiersAddHeaders
	Request     shared.Modifier `request:"mediaType=application/json"`
	Security    ModifiersAddSecurity
}

type ModifiersAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateModifierResponse  *shared.CreateModifierResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
