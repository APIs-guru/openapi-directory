package operations

import (
	"openapi/pkg/models/shared"
)

type ModifierGroupsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifierGroupsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifierGroupsDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ModifierGroupsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifierGroupsDeleteRequest struct {
	PathParams  ModifierGroupsDeletePathParams
	QueryParams ModifierGroupsDeleteQueryParams
	Headers     ModifierGroupsDeleteHeaders
	Security    ModifierGroupsDeleteSecurity
}

type ModifierGroupsDeleteResponse struct {
	BadRequestResponse          *shared.BadRequestResponse
	ContentType                 string
	DeleteModifierGroupResponse *shared.DeleteModifierGroupResponse
	NotFoundResponse            *shared.NotFoundResponse
	PaymentRequiredResponse     *shared.PaymentRequiredResponse
	StatusCode                  int64
	UnauthorizedResponse        *shared.UnauthorizedResponse
	UnexpectedErrorResponse     *shared.UnexpectedErrorResponse
	UnprocessableResponse       *shared.UnprocessableResponse
}
