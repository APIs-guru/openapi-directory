package operations



type BalanceLookupQueryParams struct {
    APIKey string `queryParam:"style=form,explode=true,name=api_key"`
    
}

type BalanceLookupRequest struct {
    QueryParams BalanceLookupQueryParams 
    
}

type BalanceLookupResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

