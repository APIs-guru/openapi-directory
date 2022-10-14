package operations

import (
	"openapi/pkg/models/shared"
)

type GetTimePeriodPathParams struct {
	TimePeriodGid string `pathParam:"style=simple,explode=false,name=time_period_gid"`
}

type GetTimePeriodQueryParams struct {
	OptFields []string `queryParam:"style=form,explode=false,name=opt_fields"`
	OptPretty *bool    `queryParam:"style=form,explode=true,name=opt_pretty"`
}

type GetTimePeriodRequest struct {
	PathParams  GetTimePeriodPathParams
	QueryParams GetTimePeriodQueryParams
}

type GetTimePeriod200ApplicationJSON struct {
	Data *shared.TimePeriodResponse `json:"data,omitempty"`
}

type GetTimePeriodResponse struct {
	ContentType                           string
	ErrorResponse                         *shared.ErrorResponse
	StatusCode                            int64
	GetTimePeriod200ApplicationJSONObject *GetTimePeriod200ApplicationJSON
}
