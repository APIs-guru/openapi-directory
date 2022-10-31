package operations

import (
"time")

type SearchTypePointNoaaFlaskMonthQueryParams struct {
    ChangedateFrom *time.Time `queryParam:"style=form,explode=true,name=changedate.from"`
    ChangedateTo *time.Time `queryParam:"style=form,explode=true,name=changedate.to"`
    CreatedateFrom *time.Time `queryParam:"style=form,explode=true,name=createdate.from"`
    CreatedateTo *time.Time `queryParam:"style=form,explode=true,name=createdate.to"`
    Description *string `queryParam:"style=form,explode=true,name=description"`
    Filesuffix *string `queryParam:"style=form,explode=true,name=filesuffix"`
    Fromdate *time.Time `queryParam:"style=form,explode=true,name=fromdate"`
    Group *string `queryParam:"style=form,explode=true,name=group"`
    Max *int64 `queryParam:"style=form,explode=true,name=max"`
    Maxlatitude *float32 `queryParam:"style=form,explode=true,name=maxlatitude"`
    Maxlongitude *float32 `queryParam:"style=form,explode=true,name=maxlongitude"`
    Minlatitude *float32 `queryParam:"style=form,explode=true,name=minlatitude"`
    Minlongitude *float32 `queryParam:"style=form,explode=true,name=minlongitude"`
    Name *string `queryParam:"style=form,explode=true,name=name"`
    SearchTypePointNoaaFlaskMonthLabIDNumber *string `queryParam:"style=form,explode=true,name=search.type_point_noaa_flask_month.lab_id_number"`
    SearchTypePointNoaaFlaskMonthMeasurementGroup *string `queryParam:"style=form,explode=true,name=search.type_point_noaa_flask_month.measurement_group"`
    SearchTypePointNoaaFlaskMonthParameter *string `queryParam:"style=form,explode=true,name=search.type_point_noaa_flask_month.parameter"`
    SearchTypePointNoaaFlaskMonthProject *string `queryParam:"style=form,explode=true,name=search.type_point_noaa_flask_month.project"`
    SearchTypePointNoaaFlaskMonthSiteID *string `queryParam:"style=form,explode=true,name=search.type_point_noaa_flask_month.site_id"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchTypePointNoaaFlaskMonthRequest struct {
    QueryParams SearchTypePointNoaaFlaskMonthQueryParams 
    
}

type SearchTypePointNoaaFlaskMonthResponse struct {
    ContentType string 
    StatusCode int64 
    
}

