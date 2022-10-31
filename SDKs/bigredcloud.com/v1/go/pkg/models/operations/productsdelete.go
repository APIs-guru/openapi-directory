package operations



type ProductsDeletePathParams struct {
    ID int64 `pathParam:"style=simple,explode=false,name=id"`
    
}

type ProductsDeleteQueryParams struct {
    Timestamp string `queryParam:"style=form,explode=true,name=timestamp"`
    
}

type ProductsDeleteRequest struct {
    PathParams ProductsDeletePathParams 
    QueryParams ProductsDeleteQueryParams 
    
}

type ProductsDeleteResponse struct {
    ContentType string 
    ProductsDelete200ApplicationJSONObject map[string]interface{} 
    StatusCode int64 
    
}

