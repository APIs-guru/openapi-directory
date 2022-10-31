package operations



type GetFastestDeparturesByCrsPathParams struct {
    Crs string `pathParam:"style=simple,explode=false,name=CRS"`
    
}

type GetFastestDeparturesByCrsQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=apiKey"`
    FilterList string `queryParam:"style=form,explode=true,name=filterList"`
    ServiceDetails *bool `queryParam:"style=form,explode=true,name=serviceDetails"`
    TimeOffset *int64 `queryParam:"style=form,explode=true,name=timeOffset"`
    TimeWindow *int64 `queryParam:"style=form,explode=true,name=timeWindow"`
    
}

type GetFastestDeparturesByCrsRequest struct {
    PathParams GetFastestDeparturesByCrsPathParams 
    QueryParams GetFastestDeparturesByCrsQueryParams 
    
}

type GetFastestDeparturesByCrsResponse struct {
    ContentType string 
    StatusCode int64 
    
}

