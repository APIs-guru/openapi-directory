package operations

import (
	"time"
)

type SearchUfoSightingsQueryParams struct {
	ChangedateFrom                       *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                         *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                       *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                         *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                          *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                           *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                             *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                                *string    `queryParam:"style=form,explode=true,name=group"`
	Max                                  *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                          *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                         *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                          *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                         *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                                 *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbUfoSightingsCity             *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.city"`
	SearchDbUfoSightingsComments         *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.comments"`
	SearchDbUfoSightingsCountry          *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.country"`
	SearchDbUfoSightingsDatePosted       *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.date_posted"`
	SearchDbUfoSightingsDatetime         *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.datetime"`
	SearchDbUfoSightingsDurationHoursMin *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.duration_hours_min"`
	SearchDbUfoSightingsDurationSeconds  *float64   `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.duration_seconds"`
	SearchDbUfoSightingsLatitude         *float64   `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.latitude"`
	SearchDbUfoSightingsLongitude        *float64   `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.longitude"`
	SearchDbUfoSightingsShape            *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.shape"`
	SearchDbUfoSightingsState            *string    `queryParam:"style=form,explode=true,name=search.db_ufo_sightings.state"`
	Skip                                 *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                 *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                               *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchUfoSightingsRequest struct {
	QueryParams SearchUfoSightingsQueryParams
}

type SearchUfoSightingsResponse struct {
	ContentType string
	StatusCode  int64
}
