package operations



type QuoteReopenPathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type QuoteReopenRequest struct {
    PathParams QuoteReopenPathParams 
    
}

type QuoteReopenResponse struct {
    ContentType string 
    QuoteReopen200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

