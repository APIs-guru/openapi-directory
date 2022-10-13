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
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
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
	BadRequestResponse        *interface{}
	ContentType               string
	DeleteOpportunityResponse *shared.DeleteOpportunityResponse
	NotFoundResponse          *interface{}
	PaymentRequiredResponse   *interface{}
	StatusCode                int64
	UnauthorizedResponse      *interface{}
	UnexpectedErrorResponse   *interface{}
	UnprocessableResponse     *interface{}
}
