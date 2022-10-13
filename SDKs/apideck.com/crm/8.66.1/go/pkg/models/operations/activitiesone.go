package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActivitiesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ActivitiesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesOneRequest struct {
	PathParams  ActivitiesOnePathParams
	QueryParams ActivitiesOneQueryParams
	Headers     ActivitiesOneHeaders
	Security    ActivitiesOneSecurity
}

type ActivitiesOneResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetActivityResponse     *shared.GetActivityResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
