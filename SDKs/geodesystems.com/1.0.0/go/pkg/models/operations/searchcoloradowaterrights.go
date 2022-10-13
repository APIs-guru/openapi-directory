package operations

import (
	"time"
)

type SearchColoradoWaterRightsQueryParams struct {
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
	SearchDbColoradoWaterRightsAdjudicationDate   *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.adjudication_date"`
	SearchDbColoradoWaterRightsAppropriationDate  *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.appropriation_date"`
	SearchDbColoradoWaterRightsComments           *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.comments"`
	SearchDbColoradoWaterRightsCounty             *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.county"`
	SearchDbColoradoWaterRightsDecreedUnits       *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.decreed_units"`
	SearchDbColoradoWaterRightsDecreedUses        *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.decreed_uses"`
	SearchDbColoradoWaterRightsLocation           *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.location"`
	SearchDbColoradoWaterRightsMoreInformation    *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.more_information"`
	SearchDbColoradoWaterRightsNetAbsolute        *float64   `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.net_absolute"`
	SearchDbColoradoWaterRightsNetApexAbsolute    *float64   `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.net_apex_absolute"`
	SearchDbColoradoWaterRightsNetApexConditional *float64   `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.net_apex_conditional"`
	SearchDbColoradoWaterRightsNetConditional     *float64   `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.net_conditional"`
	SearchDbColoradoWaterRightsPriorityNo         *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.priority_no"`
	SearchDbColoradoWaterRightsSeasonalLimits     *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.seasonal_limits"`
	SearchDbColoradoWaterRightsStructureName      *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.structure_name"`
	SearchDbColoradoWaterRightsStructureType      *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.structure_type"`
	SearchDbColoradoWaterRightsWaterSource        *string    `queryParam:"style=form,explode=true,name=search.db_colorado_water_rights.water_source"`
	Skip                                          *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                          *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                        *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchColoradoWaterRightsRequest struct {
	QueryParams SearchColoradoWaterRightsQueryParams
}

type SearchColoradoWaterRightsResponse struct {
	ContentType string
	StatusCode  int64
}
