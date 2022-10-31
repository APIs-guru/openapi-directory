package operations



type NoteDeletePathParams struct {
    NoteID int32 `pathParam:"style=simple,explode=false,name=noteId"`
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type NoteDeleteRequest struct {
    PathParams NoteDeletePathParams 
    
}

type NoteDeleteResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

