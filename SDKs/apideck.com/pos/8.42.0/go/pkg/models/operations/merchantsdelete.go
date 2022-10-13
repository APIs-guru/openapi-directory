package operations

import (
	"openapi/pkg/models/shared"
)

type MerchantsDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type MerchantsDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type MerchantsDeleteHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type MerchantsDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type MerchantsDeleteRequest struct {
	PathParams  MerchantsDeletePathParams
	QueryParams MerchantsDeleteQueryParams
	Headers     MerchantsDeleteHeaders
	Security    MerchantsDeleteSecurity
}

type MerchantsDeleteResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	DeleteMerchantResponse  *shared.DeleteMerchantResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
