package operations

import (
	"openapi/pkg/models/shared"
)

type ModifierGroupsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifierGroupsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ModifierGroupsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifierGroupsAddRequest struct {
	QueryParams ModifierGroupsAddQueryParams
	Headers     ModifierGroupsAddHeaders
	Request     shared.ModifierGroupInput `request:"mediaType=application/json"`
	Security    ModifierGroupsAddSecurity
}

type ModifierGroupsAddResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	CreateModifierGroupResponse *shared.CreateModifierGroupResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
