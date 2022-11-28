package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActivitiesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type ActivitiesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesDeleteRequest struct {
	PathParams  ActivitiesDeletePathParams
	QueryParams ActivitiesDeleteQueryParams
	Headers     ActivitiesDeleteHeaders
	Security    ActivitiesDeleteSecurity
}

type ActivitiesDeleteResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	DeleteActivityResponse  *shared.DeleteActivityResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
	UnprocessableResponse   *shared.UnprocessableResponse
}
