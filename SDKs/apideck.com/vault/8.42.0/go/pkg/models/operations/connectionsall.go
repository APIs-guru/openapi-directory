package operations

import (
	"openapi/pkg/models/shared"
)

type ConnectionsAllQueryParams struct {
	API        *string `queryParam:"style=form,explode=true,name=api"`
	Configured *bool   `queryParam:"style=form,explode=true,name=configured"`
}

type ConnectionsAllHeaders struct {
	XApideckAppID      string `header:"name=x-apideck-app-id"`
	XApideckConsumerID string `header:"name=x-apideck-consumer-id"`
}

type ConnectionsAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ConnectionsAllRequest struct {
	QueryParams ConnectionsAllQueryParams
	Headers     ConnectionsAllHeaders
	Security    ConnectionsAllSecurity
}

type ConnectionsAllResponse struct {
	BadRequestResponse      *interface{}
	ContentType             string
	GetConnectionsResponse  *shared.GetConnectionsResponse
	NotFoundResponse        *interface{}
	PaymentRequiredResponse *interface{}
	StatusCode              int64
	UnauthorizedResponse    *interface{}
	UnexpectedErrorResponse *interface{}
	UnprocessableResponse   *interface{}
}
