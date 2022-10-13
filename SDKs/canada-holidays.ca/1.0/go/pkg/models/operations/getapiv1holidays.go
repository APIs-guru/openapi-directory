package operations

import (
	"openapi/pkg/models/shared"
)

type GetAPIV1HolidaysFederalEnum string

const (
	GetAPIV1HolidaysFederalEnumOne   GetAPIV1HolidaysFederalEnum = "1"
	GetAPIV1HolidaysFederalEnumZero  GetAPIV1HolidaysFederalEnum = "0"
	GetAPIV1HolidaysFederalEnumTrue  GetAPIV1HolidaysFederalEnum = "true"
	GetAPIV1HolidaysFederalEnumFalse GetAPIV1HolidaysFederalEnum = "false"
)

type GetAPIV1HolidaysQueryParams struct {
	Federal *GetAPIV1HolidaysFederalEnum `queryParam:"style=form,explode=true,name=federal"`
	Year    *string                      `queryParam:"style=form,explode=true,name=year"`
}

type GetAPIV1HolidaysRequest struct {
	QueryParams GetAPIV1HolidaysQueryParams
}

type GetAPIV1Holidays200ApplicationJSON struct {
	Holidays []shared.Holiday `json:"holidays"`
}

type GetAPIV1HolidaysResponse struct {
	ContentType                              string
	StatusCode                               int64
	GetAPIV1Holidays200ApplicationJSONObject *GetAPIV1Holidays200ApplicationJSON
}
