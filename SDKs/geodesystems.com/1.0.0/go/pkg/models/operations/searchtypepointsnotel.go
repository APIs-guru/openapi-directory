package operations

import (
"time")

type SearchTypePointSnotelQueryParams struct {
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
    SearchTypePointSnotelHucID *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.huc_id"`
    SearchTypePointSnotelHucName *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.huc_name"`
    SearchTypePointSnotelNetwork *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.network"`
    SearchTypePointSnotelSiteID *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.site_id"`
    SearchTypePointSnotelSiteNumber *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.site_number"`
    SearchTypePointSnotelState *string `queryParam:"style=form,explode=true,name=search.type_point_snotel.state"`
    Skip *int64 `queryParam:"style=form,explode=true,name=skip"`
    Text *string `queryParam:"style=form,explode=true,name=text"`
    Todate *time.Time `queryParam:"style=form,explode=true,name=todate"`
    
}

type SearchTypePointSnotelRequest struct {
    QueryParams SearchTypePointSnotelQueryParams 
    
}

type SearchTypePointSnotelResponse struct {
    ContentType string 
    StatusCode int64 
    
}

