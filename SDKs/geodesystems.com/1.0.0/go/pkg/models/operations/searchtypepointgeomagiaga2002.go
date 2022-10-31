package operations

import (
	"time"
)

type SearchTypePointGeomagIaga2002QueryParams struct {
	ChangedateFrom                               *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                 *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                               *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                 *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                  *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                   *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                     *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                        *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                          *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                  *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                 *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                  *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                 *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                         *string    `queryParam:"style=form,explode=true,name=name"`
	SearchTypePointGeomagIaga2002DataInterval    *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.data_interval"`
	SearchTypePointGeomagIaga2002DataType        *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.data_type"`
	SearchTypePointGeomagIaga2002DigitalSampling *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.digital_sampling"`
	SearchTypePointGeomagIaga2002IagaCode        *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.iaga_code"`
	SearchTypePointGeomagIaga2002SourceOfData    *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.source_of_data"`
	SearchTypePointGeomagIaga2002StationName     *string    `queryParam:"style=form,explode=true,name=search.type_point_geomag_iaga2002.station_name"`
	Skip                                         *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                         *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                       *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchTypePointGeomagIaga2002Request struct {
	QueryParams SearchTypePointGeomagIaga2002QueryParams
}

type SearchTypePointGeomagIaga2002Response struct {
	ContentType string
	StatusCode  int64
}
