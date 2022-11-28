package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ActivitiesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesAddRequest struct {
	QueryParams ActivitiesAddQueryParams
	Headers     ActivitiesAddHeaders
	Request     shared.ActivityInput `request:"mediaType=application/json"`
	Security    ActivitiesAddSecurity
}

type ActivitiesAddResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	CreateActivityResponse  *shared.CreateActivityResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
