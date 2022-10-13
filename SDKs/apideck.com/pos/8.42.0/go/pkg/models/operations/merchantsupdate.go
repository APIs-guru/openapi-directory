package operations

import (
	"openapi/pkg/models/shared"
)

type MerchantsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MerchantsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MerchantsUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MerchantsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MerchantsUpdateRequest struct {
	PathParams  MerchantsUpdatePathParams
	QueryParams MerchantsUpdateQueryParams
	Headers     MerchantsUpdateHeaders
	Request     shared.Merchant `request:"mediaType=application/json"`
	Security    MerchantsUpdateSecurity
}

type MerchantsUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateMerchantResponse  *shared.UpdateMerchantResponse
}
