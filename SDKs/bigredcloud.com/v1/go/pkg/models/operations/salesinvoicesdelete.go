package operations



type SalesInvoicesDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type SalesInvoicesDeleteQueryParams struct {
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type SalesInvoicesDeleteRequest struct {
    PathParams SalesInvoicesDeletePathParams 
    QueryParams SalesInvoicesDeleteQueryParams 
    
}

type SalesInvoicesDeleteResponse struct {
    ContentType string 
    SalesInvoicesDelete200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

