package operations

import (
	"openapi/pkg/models/shared"
)

type ModifierGroupsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ModifierGroupsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ModifierGroupsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ModifierGroupsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ModifierGroupsUpdateRequest struct {
	PathParams  ModifierGroupsUpdatePathParams
	QueryParams ModifierGroupsUpdateQueryParams
	Headers     ModifierGroupsUpdateHeaders
	Request     shared.ModifierGroup `request:"mediaType=application/json"`
	Security    ModifierGroupsUpdateSecurity
}

type ModifierGroupsUpdateResponse struct {
	BadRequestResponse          *interface{}
	ContentType                 string
	NotFoundResponse            *interface{}
	PaymentRequiredResponse     *interface{}
	StatusCode                  int64
	UnauthorizedResponse        *interface{}
	UnexpectedErrorResponse     *interface{}
	UnprocessableResponse       *interface{}
	UpdateModifierGroupResponse *shared.UpdateModifierGroupResponse
}
