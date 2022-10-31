package operations

import (
	"openapi/pkg/models/shared"
)

type ModifiersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifiersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifiersUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ModifiersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifiersUpdateRequest struct {
	PathParams  ModifiersUpdatePathParams
	QueryParams ModifiersUpdateQueryParams
	Headers     ModifiersUpdateHeaders
	Request     shared.Modifier `request:"mediaType=application/json"`
	Security    ModifiersUpdateSecurity
}

type ModifiersUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateModifierResponse  *shared.UpdateModifierResponse
}
