package operations

import (
	"openapi/pkg/models/shared"
)

type OpportunitiesAllQueryParams struct {
	Cursor *string                     `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.OpportunitiesFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64                      `queryParam:"style=form,explode=true,name=limit"`
	Raw    *bool                       `queryParam:"style=form,explode=true,name=raw"`
	Sort   *shared.OpportunitiesSort   `queryParam:"style=deepObject,explode=true,name=sort"`
}

type OpportunitiesAllHeaders struct {
	XApideckAppID      string  `header:"name=x-apideck-app-id"`
	XApideckConsumerID string  `header:"name=x-apideck-consumer-id"`
	XApideckServiceID  *string `header:"name=x-apideck-service-id"`
}

type OpportunitiesAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type OpportunitiesAllRequest struct {
	QueryParams OpportunitiesAllQueryParams
	Headers     OpportunitiesAllHeaders
	Security    OpportunitiesAllSecurity
}

type OpportunitiesAllResponse struct {
	BadRequestResponse       *interface{}
	ContentType              string
	GetOpportunitiesResponse *shared.GetOpportunitiesResponse
	NotFoundResponse         *interface{}
	PaymentRequiredResponse  *interface{}
	StatusCode               int64
	UnauthorizedResponse     *interface{}
	UnexpectedErrorResponse  *interface{}
	UnprocessableResponse    *interface{}
}
