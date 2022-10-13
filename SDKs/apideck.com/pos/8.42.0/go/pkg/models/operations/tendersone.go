package operations

import (
	"openapi/pkg/models/shared"
)

type TendersOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type TendersOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type TendersOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type TendersOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type TendersOneRequest struct {
	PathParams  TendersOnePathParams
	QueryParams TendersOneQueryParams
	Headers     TendersOneHeaders
	Security    TendersOneSecurity
}

type TendersOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetTenderResponse       *shared.GetTenderResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
