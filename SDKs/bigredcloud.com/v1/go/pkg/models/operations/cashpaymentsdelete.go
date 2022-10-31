package operations



type CashPaymentsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type CashPaymentsDeleteQueryParams struct {
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type CashPaymentsDeleteRequest struct {
    PathParams CashPaymentsDeletePathParams 
    QueryParams CashPaymentsDeleteQueryParams 
    
}

type CashPaymentsDeleteResponse struct {
    CashPaymentsDelete200ApplicationJSONObject map[string]interface{} 
    ContentType string 
    StatusCode int64 
    
}

