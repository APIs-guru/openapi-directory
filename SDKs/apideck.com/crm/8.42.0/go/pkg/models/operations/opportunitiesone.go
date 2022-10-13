package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesOnePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OpportunitiesOneQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OpportunitiesOneHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OpportunitiesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesOneRequest struct {
	PathParams  OpportunitiesOnePathParams
	QueryParams OpportunitiesOneQueryParams
	Headers     OpportunitiesOneHeaders
	Security    OpportunitiesOneSecurity
}

type OpportunitiesOneResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetOpportunityResponse  *shared.GetOpportunityResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
