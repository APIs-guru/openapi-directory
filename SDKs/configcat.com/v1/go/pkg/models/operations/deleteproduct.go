package operations



type DeleteProductPathParams struct {
    ProductID string `pathParam:"style=simple,explode=false,name=productId"`
    
}

type DeleteProductRequest struct {
    PathParams DeleteProductPathParams 
    
}

type DeleteProductResponse struct {
    ContentType string 
    StatusCode int64 
    
}

