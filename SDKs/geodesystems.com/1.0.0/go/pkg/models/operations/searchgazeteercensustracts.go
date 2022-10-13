package operations

import (
	"time"
)

type SearchGazeteerCensusTractsQueryParams struct {
	ChangedateFrom                                *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                                  *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                                *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                                  *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                                   *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                                    *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                                      *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                         *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                           *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                                   *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                                  *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                                   *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                                  *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                          *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbGazeteerCensusTractsCensusTractID     *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.census_tract_id"`
	SearchDbGazeteerCensusTractsCountyFips        *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.county_fips"`
	SearchDbGazeteerCensusTractsCountyName        *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.county_name"`
	SearchDbGazeteerCensusTractsFullCensusTractID *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.full_census_tract_id"`
	SearchDbGazeteerCensusTractsLandArea          *float64   `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.land_area"`
	SearchDbGazeteerCensusTractsLocation          *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.location"`
	SearchDbGazeteerCensusTractsState             *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.state"`
	SearchDbGazeteerCensusTractsStateFips         *string    `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.state_fips"`
	SearchDbGazeteerCensusTractsWaterArea         *float64   `queryParam:"style=form,explode=true,name=search.db_gazeteer_census_tracts.water_area"`
	Skip                                          *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                          *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                        *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchGazeteerCensusTractsRequest struct {
	QueryParams SearchGazeteerCensusTractsQueryParams
}

type SearchGazeteerCensusTractsResponse struct {
	ContentType string
	StatusCode  int64
}
