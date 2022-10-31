package operations

import (
	"openapi/pkg/models/shared"
)

type ApisAllQueryParams struct {
	Cursor *string            `queryParam:"style=form,explode=true,name=cursor"`
	Filter *shared.ApisFilter `queryParam:"style=deepObject,explode=true,name=filter"`
	Limit  *int64             `queryParam:"style=form,explode=true,name=limit"`
}

type ApisAllHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type ApisAllSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type ApisAllRequest struct {
	QueryParams ApisAllQueryParams
	Headers     ApisAllHeaders
	Security    ApisAllSecurity
}

type ApisAllResponse struct {
	BadRequestResponse      *shared.BadRequestResponse
	ContentType             string
	GetApisResponse         *shared.GetApisResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
}
