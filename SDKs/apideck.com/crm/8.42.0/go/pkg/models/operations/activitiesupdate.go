package operations

import (
	"openapi/pkg/models/shared"
)

type ActivitiesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type ActivitiesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type ActivitiesUpdateHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type ActivitiesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ActivitiesUpdateRequest struct {
	PathParams  ActivitiesUpdatePathParams
	QueryParams ActivitiesUpdateQueryParams
	Headers     ActivitiesUpdateHeaders
	Request     shared.Activity `request:"mediaType=application/json"`
	Security    ActivitiesUpdateSecurity
}

type ActivitiesUpdateResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
	UpdateActivityResponse  *shared.UpdateActivityResponse
}
