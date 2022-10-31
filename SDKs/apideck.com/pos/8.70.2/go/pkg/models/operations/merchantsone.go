package operations

import (
	"openapi/pkg/models/shared"
)

type MerchantsOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MerchantsOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MerchantsOneHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type MerchantsOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MerchantsOneRequest struct {
	PathParams  MerchantsOnePathParams
	QueryParams MerchantsOneQueryParams
	Headers     MerchantsOneHeaders
	Security    MerchantsOneSecurity
}

type MerchantsOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetMerchantResponse     *shared.GetMerchantResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
