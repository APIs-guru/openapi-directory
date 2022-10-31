package operations

import (
	"time"
)

type SearchGazeteerCountiesQueryParams struct {
	ChangedateFrom                            *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                              *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                            *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                              *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                               *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                  *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                     *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                       *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                               *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                              *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                               *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                              *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                      *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbGazeteerCountiesAreaLand          *float64   `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.area_land"`
	SearchDbGazeteerCountiesAreaWater         *float64   `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.area_water"`
	SearchDbGazeteerCountiesCountyFips        *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.county_fips"`
	SearchDbGazeteerCountiesCountyName        *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.county_name"`
	SearchDbGazeteerCountiesFullCountyFips    *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.full_county_fips"`
	SearchDbGazeteerCountiesLocation          *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.location"`
	SearchDbGazeteerCountiesStateAbbreviation *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.state_abbreviation"`
	SearchDbGazeteerCountiesStateFips         *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_counties.state_fips"`
	Skip                                      *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                      *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                    *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchGazeteerCountiesRequest struct {
	QueryParams SearchGazeteerCountiesQueryParams
}

type SearchGazeteerCountiesResponse struct {
	ContentType string
	StatusCode  int64
}
