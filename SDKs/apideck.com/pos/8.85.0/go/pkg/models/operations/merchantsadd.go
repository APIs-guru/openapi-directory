package operations

import (
	"openapi/pkg/models/shared"
)

type MerchantsAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MerchantsAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type MerchantsAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MerchantsAddRequest struct {
	QueryParams MerchantsAddQueryParams
	Headers     MerchantsAddHeaders
	Request     shared.MerchantInput `request:"mediaType=application/json"`
	Security    MerchantsAddSecurity
}

type MerchantsAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateMerchantResponse  *shared.CreateMerchantResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
