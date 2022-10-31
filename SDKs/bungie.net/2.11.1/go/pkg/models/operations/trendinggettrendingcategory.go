package operations



type TrendingGetTrendingCategoryPathParams struct {
    CategoryID string `pathParam:"style=simple,explode=false,name=categoryId"`
    PageNumber int32 `pathParam:"style=simple,explode=false,name=pageNumber"`
    
}

type TrendingGetTrendingCategoryRequest struct {
    PathParams TrendingGetTrendingCategoryPathParams 
    
}

type TrendingGetTrendingCategoryResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

