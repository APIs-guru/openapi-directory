package operations

import (
	"openapi/pkg/models/shared"
)

type ModifiersDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifiersDeleteQueryParams struct {
	Filter *shared.ModifierGroupFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Raw    *bool                       `queryParam:"style=form,explode=true,name=raw"`
}

type ModifiersDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ModifiersDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifiersDeleteRequest struct {
	PathParams  ModifiersDeletePathParams
	QueryParams ModifiersDeleteQueryParams
	Headers     ModifiersDeleteHeaders
	Security    ModifiersDeleteSecurity
}

type ModifiersDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteModifierResponse  *shared.DeleteModifierResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
