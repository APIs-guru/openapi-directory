package operations

import (
	"openapi/pkg/models/shared"
)

type GetUserRateLimitsQueryParams struct {
	APIContext *string `queryParam:"style=form,explode=true,name=api_context"`
	APIName    *string `queryParam:"style=form,explode=true,name=api_name"`
}

type GetUserRateLimitsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetUserRateLimitsRequest struct {
	QueryParams GetUserRateLimitsQueryParams
	Security    GetUserRateLimitsSecurity
}

type GetUserRateLimits500ApplicationJSON struct {
	Errors []shared.Error `json:"errors,omitempty"`
}

type GetUserRateLimitsResponse struct {
	ContentType                               string
	RateLimitsResponse                        *shared.RateLimitsResponse
	StatusCode                                int64
	GetUserRateLimits500ApplicationJSONObject *GetUserRateLimits500ApplicationJSON
}
