package operations

import (
	"openapi/pkg/models/shared"
)

type GetRateLimitsQueryParams struct {
	APIContext *string `queryParam:"style=form,explode=true,name=api_context"`
	APIName    *string `queryParam:"style=form,explode=true,name=api_name"`
}

type GetRateLimitsSecurity struct {
	APIAuth shared.SchemeAPIAuth `security:"scheme,type=oauth2"`
}

type GetRateLimitsRequest struct {
	QueryParams GetRateLimitsQueryParams
	Security    GetRateLimitsSecurity
}

type GetRateLimits500ApplicationJSON struct {
	Errors []shared.Error `json:"errors"`
}

type GetRateLimitsResponse struct {
	ContentType                           string
	RateLimitsResponse                    *shared.RateLimitsResponse
	StatusCode                            int64
	GetRateLimits500ApplicationJSONObject *GetRateLimits500ApplicationJSON
}
