package operations



type QueryDbQueryParams struct {
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type QueryDbRequest struct {
    QueryParams QueryDbQueryParams 
    
}

type QueryDbResponse struct {
    ContentType string 
    StatusCode int64 
    QueryDb200ApplicationJSONObject map[string]interface{} 
    
}

