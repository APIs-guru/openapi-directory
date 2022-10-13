package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OpportunitiesAddHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OpportunitiesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesAddRequest struct {
	QueryParams OpportunitiesAddQueryParams
	Headers     OpportunitiesAddHeaders
	Request     shared.Opportunity `request:"mediaType=application/json"`
	Security    OpportunitiesAddSecurity
}

type OpportunitiesAddResponse struct {
	BadRequestResponse        *interface{}
	ContentType               string
	CreateOpportunityResponse *shared.CreateOpportunityResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
