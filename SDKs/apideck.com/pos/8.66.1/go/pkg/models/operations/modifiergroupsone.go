package operations

import (
	"openapi/pkg/models/shared"
)

type ModifierGroupsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifierGroupsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifierGroupsOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ModifierGroupsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifierGroupsOneRequest struct {
	PathParams  ModifierGroupsOnePathParams
	QueryParams ModifierGroupsOneQueryParams
	Headers     ModifierGroupsOneHeaders
	Security    ModifierGroupsOneSecurity
}

type ModifierGroupsOneResponse struct {
	BadRequestResponse       *shared.BadRequestResponse
	ContentType              string
	GetModifierGroupResponse *shared.GetModifierGroupResponse
	NotFoundResponse         *shared.NotFoundResponse
	PaymentRequiredResponse  *shared.PaymentRequiredResponse
	StatusCode               int64
	UnauthorizedResponse     *shared.UnauthorizedResponse
	UnexpectedErrorResponse  *shared.UnexpectedErrorResponse
	UnprocessableResponse    *shared.UnprocessableResponse
}
