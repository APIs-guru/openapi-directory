package operations

import (
	"time"
)

type SearchPropertydbQueryParams struct {
	ChangedateFrom                 *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
	ChangedateTo                   *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
	CreatedateFrom                 *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
	CreatedateTo                   *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
	Description                    *string    `queryParam:"style=form,explode=true,name=description"`
	Filesuffix                     *string    `queryParam:"style=form,explode=true,name=filesuffix"`
	Fromdate                       *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
	Group                          *string    `queryParam:"style=form,explode=true,name=group"`
	Max                            *int64     `queryParam:"style=form,explode=true,name=max"`
	Maxlatitude                    *float32   `queryParam:"style=form,explode=true,name=maxlatitude"`
	Maxlongitude                   *float32   `queryParam:"style=form,explode=true,name=maxlongitude"`
	Minlatitude                    *float32   `queryParam:"style=form,explode=true,name=minlatitude"`
	Minlongitude                   *float32   `queryParam:"style=form,explode=true,name=minlongitude"`
	Name                           *string    `queryParam:"style=form,explode=true,name=name"`
	SearchDbPropertydbAddress      *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.address"`
	SearchDbPropertydbBuildingType *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.building_type"`
	SearchDbPropertydbCity         *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.city"`
	SearchDbPropertydbHouseSize    *int64     `queryParam:"style=form,explode=true,name=search.db_propertydb.house_size"`
	SearchDbPropertydbLocation     *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.location"`
	SearchDbPropertydbLotAcres     *float64   `queryParam:"style=form,explode=true,name=search.db_propertydb.lot_acres"`
	SearchDbPropertydbLotSqft      *int64     `queryParam:"style=form,explode=true,name=search.db_propertydb.lot_sqft"`
	SearchDbPropertydbOwner        *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.owner"`
	SearchDbPropertydbPriceSqft    *float64   `queryParam:"style=form,explode=true,name=search.db_propertydb.price_sqft"`
	SearchDbPropertydbPropertyID   *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.property_id"`
	SearchDbPropertydbState        *string    `queryParam:"style=form,explode=true,name=search.db_propertydb.state"`
	SearchDbPropertydbValue        *int64     `queryParam:"style=form,explode=true,name=search.db_propertydb.value"`
	Skip                           *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                           *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                         *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchPropertydbRequest struct {
	QueryParams SearchPropertydbQueryParams
}

type SearchPropertydbResponse struct {
	ContentType string
	StatusCode  int64
}
