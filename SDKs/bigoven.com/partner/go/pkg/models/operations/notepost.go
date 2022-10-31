package operations

import (
"openapi/pkg/models/shared")

type NotePostPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type NotePostRequests struct {
    Api2ControllersWebAPINoteControllerNoteRequest *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=application/json"`
    Api2ControllersWebAPINoteControllerNoteRequest1 *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ControllersWebAPINoteControllerNoteRequest2 *shared.Api2ControllersWebAPINoteControllerNoteRequest `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type NotePostRequest struct {
    PathParams NotePostPathParams 
    Request NotePostRequests 
    
}

type NotePostResponse struct {
    BigOvenModelApi2RecipeNote *shared.BigOvenModelApi2RecipeNote 
    Body []byte 
    ContentType string 
    StatusCode int64 
    
}

