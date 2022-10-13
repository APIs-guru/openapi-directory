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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse          *interface{}
	ContentType                 string
	DeleteModifierGroupResponse *shared.DeleteModifierGroupResponse
	NotFoundResponse            *interface{}
	PaymentRequiredResponse     *interface{}
	StatusCode                  int64
	UnauthorizedResponse        *interface{}
	UnexpectedErrorResponse     *interface{}
	UnprocessableResponse       *interface{}
}
