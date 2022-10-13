package operations

import (
	"openapi/pkg/models/shared"
)

type ModifierGroupsAllQueryParams struct {
	Cursor *string `queryParam:"style=form,explode=true,name=cursor"`
	Limit  *int64  `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool   `queryParam:"style=form,explode=true,name=raw"`
}

type ModifierGroupsAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ModifierGroupsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifierGroupsAllRequest struct {
	QueryParams ModifierGroupsAllQueryParams
	Headers     ModifierGroupsAllHeaders
	Security    ModifierGroupsAllSecurity
}

type ModifierGroupsAllResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	GetModifierGroupsResponse *shared.GetModifierGroupsResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
