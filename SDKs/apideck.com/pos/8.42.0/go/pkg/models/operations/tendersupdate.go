package operations

import (
	"openapi/pkg/models/shared"
)

type TendersUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TendersUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TendersUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TendersUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TendersUpdateRequest struct {
	PathParams  TendersUpdatePathParams
	QueryParams TendersUpdateQueryParams
	Headers     TendersUpdateHeaders
	Request     shared.Tender `request:"mediaType=application/json"`
	Security    TendersUpdateSecurity
}

type TendersUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateTenderResponse    *shared.UpdateTenderResponse
}
