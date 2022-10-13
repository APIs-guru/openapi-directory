package operations

import (
	"openapi/pkg/models/shared"
)

type GetHolidaysHolidayIDPathParams struct {
	HolidayID int64 `pathParam:"style=simple,explode=false,name=holidayId"`
}

type GetHolidaysHolidayIDQueryParams struct {
	Year *string `queryParam:"style=form,explode=true,name=year"`
}

type GetHolidaysHolidayIDRequest struct {
	PathParams  GetHolidaysHolidayIDPathParams
	QueryParams GetHolidaysHolidayIDQueryParams
}

type GetHolidaysHolidayID200ApplicationJSON struct {
	Holiday *shared.Holiday `json:"holiday"`
}

type GetHolidaysHolidayID404ApplicationJSON struct {
	Error *shared.Error `json:"error"`
}

type GetHolidaysHolidayIDResponse struct {
	ContentType                                  string
	StatusCode                                   int64
	GetHolidaysHolidayID200ApplicationJSONObject *GetHolidaysHolidayID200ApplicationJSON
	GetHolidaysHolidayID404ApplicationJSONObject *GetHolidaysHolidayID404ApplicationJSON
}
