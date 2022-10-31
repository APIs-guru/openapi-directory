package operations



type RecipeDeletePathParams struct {
    ID int32 `pathParam:"style=simple,explode=false,name=id"`
    
}

type RecipeDeleteRequest struct {
    PathParams RecipeDeletePathParams 
    
}

type RecipeDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

