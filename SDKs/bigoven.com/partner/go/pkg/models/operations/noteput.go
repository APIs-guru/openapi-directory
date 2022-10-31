package operations

import (
"openapi/pkg/models/shared")

type NotePutPathParams struct {
    NoteID int32 `pathParam:"style=simple,explode=false,name=noteId"`
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type NotePutRequests struct {
    Api2ControllersWebAPINoteControllerNoteRequest *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=application/json"`
    Api2ControllersWebAPINoteControllerNoteRequest1 *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPINoteControllerNoteRequest2 *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type NotePutRequest struct {
    PathParams NotePutPathParams 
    Request NotePutRequests 
    
}

type NotePutResponse struct {
    BigOvenModelAPIRecipeNote *shared.BigOvenModelAPIRecipeNote 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

