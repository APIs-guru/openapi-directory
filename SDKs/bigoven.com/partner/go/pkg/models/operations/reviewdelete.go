package operations



type ReviewDeletePathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    ReviewID int64 `pathParam:"style=simple,explode=false,name=reviewId"`
    
}

type ReviewDeleteRequest struct {
    PathParams ReviewDeletePathParams 
    
}

type ReviewDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

