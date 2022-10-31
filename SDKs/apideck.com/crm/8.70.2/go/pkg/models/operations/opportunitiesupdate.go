package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesUpdatePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OpportunitiesUpdateQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OpportunitiesUpdateHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type OpportunitiesUpdateSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesUpdateRequest struct {
	PathParams  OpportunitiesUpdatePathParams
	QueryParams OpportunitiesUpdateQueryParams
	Headers     OpportunitiesUpdateHeaders
	Request     shared.Opportunity `request:"mediaType=application/json"`
	Security    OpportunitiesUpdateSecurity
}

type OpportunitiesUpdateResponse struct {
	BadRequestResponse        *shared.BadRequestResponse
	ContentType               string
	NotFoundResponse          *shared.NotFoundResponse
	PaymentRequiredResponse   *shared.PaymentRequiredResponse
	StatusCode                int64
	UnauthorizedResponse      *shared.UnauthorizedResponse
	UnexpectedErrorResponse   *shared.UnexpectedErrorResponse
	UnprocessableResponse     *shared.UnprocessableResponse
	UpdateOpportunityResponse *shared.UpdateOpportunityResponse
}
