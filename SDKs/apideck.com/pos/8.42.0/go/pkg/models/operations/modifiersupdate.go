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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateModifierResponse  *shared.UpdateModifierResponse
}
