package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesAddQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OpportunitiesAddHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type OpportunitiesAddSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesAddRequest struct {
	QueryParams OpportunitiesAddQueryParams
	Headers     OpportunitiesAddHeaders
	Request     shared.OpportunityInput `request:"mediaType=application/json"`
	Security    OpportunitiesAddSecurity
}

type OpportunitiesAddResponse struct {
	BadRequestResponse        *shared.BadRequestResponse
	ContentType               string
	CreateOpportunityResponse *shared.CreateOpportunityResponse
	NotFoundResponse          *shared.NotFoundResponse
	PaymentRequiredResponse   *shared.PaymentRequiredResponse
	StatusCode                int64
	UnauthorizedResponse      *shared.UnauthorizedResponse
	UnexpectedErrorResponse   *shared.UnexpectedErrorResponse
	UnprocessableResponse     *shared.UnprocessableResponse
}
