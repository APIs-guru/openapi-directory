package operations

import (
	"time"
)

type SearchTypePointAmrcFreewaveQueryParams struct {
	ChangedateFrom                              *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                              *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                 *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                  *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                    *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                       *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                         *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                 *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                 *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                        *string    `queryParam:"style=form,explode=true,name=name"`
	SearchTypePointAmrcFreewaveDataloggerModel  *string    `queryParam:"style=form,explode=true,name=search.type_point_amrc_freewave.datalogger_model"`
	SearchTypePointAmrcFreewaveDataloggerSerial *string    `queryParam:"style=form,explode=true,name=search.type_point_amrc_freewave.datalogger_serial"`
	SearchTypePointAmrcFreewaveFormat           *string    `queryParam:"style=form,explode=true,name=search.type_point_amrc_freewave.format"`
	SearchTypePointAmrcFreewaveStationName      *string    `queryParam:"style=form,explode=true,name=search.type_point_amrc_freewave.station_name"`
	Skip                                        *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                        *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                      *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchTypePointAmrcFreewaveRequest struct {
	QueryParams SearchTypePointAmrcFreewaveQueryParams
}

type SearchTypePointAmrcFreewaveResponse struct {
	ContentType string
	StatusCode  int64
}
