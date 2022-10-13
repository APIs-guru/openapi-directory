package operations

import (
	"openapi/pkg/models/shared"
)

type APIResourcesOnePathParams struct {
	ID         string `pathParam:"style=simple,explode=false,name=id"`
	ResourceID string `pathParam:"style=simple,explode=false,name=resource_id"`
}

type APIResourcesOneHeaders struct {
	XApideckAppID string `header:"name=x-apideck-app-id"`
}

type APIResourcesOneSecurity struct {
	APIKey shared.SchemeAPIKey `security:"scheme,type=apiKey,subtype=header"`
}

type APIResourcesOneRequest struct {
	PathParams APIResourcesOnePathParams
	Headers    APIResourcesOneHeaders
	Security   APIResourcesOneSecurity
}

type APIResourcesOneResponse struct {
	ContentType             string
	GetAPIResourceResponse  *shared.GetAPIResourceResponse
	NotFoundResponse        *shared.NotFoundResponse
	PaymentRequiredResponse *shared.PaymentRequiredResponse
	StatusCode              int64
	UnauthorizedResponse    *shared.UnauthorizedResponse
	UnexpectedErrorResponse *shared.UnexpectedErrorResponse
}
