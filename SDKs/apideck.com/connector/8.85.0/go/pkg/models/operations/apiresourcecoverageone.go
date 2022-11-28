package operations

import (
	"openapi/pkg/models/shared"
)

type APIResourceCoverageOnePathParams struct {
	ID         string `pathParam:"style=simple,explode=false,name=id"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
}

type APIResourceCoverageOneHeaders struct {
	XApideckAppID string `header:"style=simple,explode=false,name=x-apideck-app-id"`
}

type APIResourceCoverageOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type APIResourceCoverageOneRequest struct {
	PathParams APIResourceCoverageOnePathParams
	Headers    APIResourceCoverageOneHeaders
	Security   APIResourceCoverageOneSecurity
}

type APIResourceCoverageOneResponse struct {
	ContentType                    string
	GetAPIResourceCoverageResponse *shared.GetAPIResourceCoverageResponse
	NotFoundResponse               *shared.NotFoundResponse
	PaymentRequiredResponse        *shared.PaymentRequiredResponse
	StatusCode                     int64
	UnauthorizedResponse           *shared.UnauthorizedResponse
	UnexpectedErrorResponse        *shared.UnexpectedErrorResponse
}
