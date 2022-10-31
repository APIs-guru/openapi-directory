package operations



type SalesRepDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SalesRepDeleteQueryParams struct {
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type SalesRepDeleteRequest struct {
    PathParams SalesRepDeletePathParams 
    QueryParams SalesRepDeleteQueryParams 
    
}

type SalesRepDeleteResponse struct {
    ContentType string 
    SalesRepDelete200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

