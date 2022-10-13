package operations

import (
	"time"
)

type SearchTypeMetametaFieldQueryParams struct {
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
	SearchTypeMetametaFieldDatabaseColumnSize *int64     `queryParam:"style=form,explode=true,name=search.type_metameta_field.database_column_size"`
	SearchTypeMetametaFieldDatatype           *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.datatype"`
	SearchTypeMetametaFieldEnumerationValues  *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.enumeration_values"`
	SearchTypeMetametaFieldFieldID            *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.field_id"`
	SearchTypeMetametaFieldFieldIndex         *int64     `queryParam:"style=form,explode=true,name=search.type_metameta_field.field_index"`
	SearchTypeMetametaFieldMissing            *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.missing"`
	SearchTypeMetametaFieldProperties         *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.properties"`
	SearchTypeMetametaFieldUnit               *string    `queryParam:"style=form,explode=true,name=search.type_metameta_field.unit"`
	Skip                                      *int64     `queryParam:"style=form,explode=true,name=skip"`
	Text                                      *string    `queryParam:"style=form,explode=true,name=text"`
	Todate                                    *time.Time `queryParam:"style=form,explode=true,name=todate"`
}

type SearchTypeMetametaFieldRequest struct {
	QueryParams SearchTypeMetametaFieldQueryParams
}

type SearchTypeMetametaFieldResponse struct {
	ContentType string
	StatusCode  int64
}
