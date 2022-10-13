package operations

import (
	"time"
)

type SearchPoliceStopDataQueryParams struct {
	ChangedateFrom                  *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                    *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                  *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                    *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                     *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                      *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                        *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                           *string    `queryParam:"style=form,explode=true,name=group"`
	Max                             *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                     *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                    *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                     *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                    *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                            *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbPoliceStopDataAddress   *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.address"`
	SearchDbPoliceStopDataDate      *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.date"`
	SearchDbPoliceStopDataEthnicity *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.ethnicity"`
	SearchDbPoliceStopDataMinutes   *int64     `queryParam:"style=form,explode=true,name=search.db_police_stop_data.minutes"`
	SearchDbPoliceStopDataRace      *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.race"`
	SearchDbPoliceStopDataResident  *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.resident"`
	SearchDbPoliceStopDataSex       *string    `queryParam:"style=form,explode=true,name=search.db_police_stop_data.sex"`
	Skip                            *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                            *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                          *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchPoliceStopDataRequest struct {
	QueryParams SearchPoliceStopDataQueryParams
}

type SearchPoliceStopDataResponse struct {
	ContentType string
	StatusCode  int64
}
