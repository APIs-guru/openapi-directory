package operations

import (
	"time"
)

type SearchGeoGpxQueryParams struct {
	ChangedateFrom            *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo              *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom            *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo              *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description               *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                  *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                     *string    `queryParam:"style=form,explode=true,name=group"`
	Max                       *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude               *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude              *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude               *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude              *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                      *string    `queryParam:"style=form,explode=true,name=name"`
	SearchGeoGpxDistance      *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.distance"`
	SearchGeoGpxElevationGain *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.elevation_gain"`
	SearchGeoGpxElevationLoss *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.elevation_loss"`
	SearchGeoGpxMovingTime    *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.moving_time"`
	SearchGeoGpxSpeed         *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.speed"`
	SearchGeoGpxTotalTime     *float64   `queryParam:"style=form,explode=true,name=search.geo_gpx.total_time"`
	Skip                      *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                      *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                    *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchGeoGpxRequest struct {
	QueryParams SearchGeoGpxQueryParams
}

type SearchGeoGpxResponse struct {
	ContentType string
	StatusCode  int64
}
