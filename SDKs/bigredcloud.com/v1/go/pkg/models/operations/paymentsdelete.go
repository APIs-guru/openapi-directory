package operations



type PaymentsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type PaymentsDeleteQueryParams struct {
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type PaymentsDeleteRequest struct {
    PathParams PaymentsDeletePathParams 
    QueryParams PaymentsDeleteQueryParams 
    
}

type PaymentsDeleteResponse struct {
    ContentType string 
    PaymentsDelete200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

