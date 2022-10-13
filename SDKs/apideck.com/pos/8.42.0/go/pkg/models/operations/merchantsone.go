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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse      *interface{}
	ContentType             string
	GetMerchantResponse     *shared.GetMerchantResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
