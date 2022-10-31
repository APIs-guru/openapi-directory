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
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
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
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateTenderResponse    *shared.UpdateTenderResponse
}
