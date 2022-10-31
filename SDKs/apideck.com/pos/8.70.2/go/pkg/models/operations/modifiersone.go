package operations

import (
	"openapi/pkg/models/shared"
)

type ModifiersOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifiersOneQueryParams struct {
	Filter *shared.ModifierGroupFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Raw    *bool                       `queryParam:"style=form,explode=true,name=raw"`
}

type ModifiersOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ModifiersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifiersOneRequest struct {
	PathParams  ModifiersOnePathParams
	QueryParams ModifiersOneQueryParams
	Headers     ModifiersOneHeaders
	Security    ModifiersOneSecurity
}

type ModifiersOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetModifierResponse     *shared.GetModifierResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
