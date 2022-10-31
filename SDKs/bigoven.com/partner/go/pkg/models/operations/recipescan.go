package operations



type RecipeScanQueryParams struct {
    Devicetype *string `queryParam:"style=form,explode=true,name=devicetype"`
    Lat *float64 `queryParam:"style=form,explode=true,name=lat"`
    Lng *float64 `queryParam:"style=form,explode=true,name=lng"`
    Test *bool `queryParam:"style=form,explode=true,name=test"`
    
}

type RecipeScanRequest struct {
    QueryParams RecipeScanQueryParams 
    
}

type RecipeScanResponse struct {
    ContentType string 
    StatusCode int64 
    
}

