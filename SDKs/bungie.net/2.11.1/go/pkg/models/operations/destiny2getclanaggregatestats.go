package operations



type Destiny2GetClanAggregateStatsPathParams struct {
    GroupID int64 `pathParam:"style=simple,explode=false,name=groupId"`
    
}

type Destiny2GetClanAggregateStatsQueryParams struct {
    Modes *string `queryParam:"style=form,explode=true,name=modes"`
    
}

type Destiny2GetClanAggregateStatsRequest struct {
    PathParams Destiny2GetClanAggregateStatsPathParams 
    QueryParams Destiny2GetClanAggregateStatsQueryParams 
    
}

type Destiny2GetClanAggregateStatsResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

