package operations

import (
	"openapi/pkg/models/shared"
)

type ItemsUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ItemsUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ItemsUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ItemsUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ItemsUpdateRequest struct {
	PathParams  ItemsUpdatePathParams
	QueryParams ItemsUpdateQueryParams
	Headers     ItemsUpdateHeaders
	Request     shared.Item `request:"mediaType=application/json"`
	Security    ItemsUpdateSecurity
}

type ItemsUpdateResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
	UpdateItemResponse      *shared.UpdateItemResponse
}
