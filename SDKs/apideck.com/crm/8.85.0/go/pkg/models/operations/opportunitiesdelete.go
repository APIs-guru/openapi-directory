package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesDeletePathParams struct {
	ID string `pathParam:"style=simple,explode=false,name=id"`
}

type OpportunitiesDeleteQueryParams struct {
	Raw *bool `queryParam:"style=form,explode=true,name=raw"`
}

type OpportunitiesDeleteHeaders struct {
	XApideckAppID      string  `header:"style=simple,explode=false,name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"style=simple,explode=false,name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"style=simple,explode=false,name=x-apideck-service-id"`
}

type OpportunitiesDeleteSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesDeleteRequest struct {
	PathParams  OpportunitiesDeletePathParams
	QueryParams OpportunitiesDeleteQueryParams
	Headers     OpportunitiesDeleteHeaders
	Security    OpportunitiesDeleteSecurity
}

type OpportunitiesDeleteResponse struct {
	BadRequestResponse        *shared.BadRequestResponse
	ContentType               string
	DeleteOpportunityResponse *shared.DeleteOpportunityResponse
	NotFoundResponse          *shared.NotFoundResponse
	PaymentRequiredResponse   *shared.PaymentRequiredResponse
	StatusCode                int64
	UnauthorizedResponse      *shared.UnauthorizedResponse
	UnexpectedErrorResponse   *shared.UnexpectedErrorResponse
	UnprocessableResponse     *shared.UnprocessableResponse
}
