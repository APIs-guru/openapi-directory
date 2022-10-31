package operations



type RecipeAutoCompleteQueryParams struct {
    Limit *int32 `queryParam:"style=form,explode=true,name=limit"`
    Query string `queryParam:"style=form,explode=true,name=query"`
    
}

type RecipeAutoCompleteRequest struct {
    QueryParams RecipeAutoCompleteQueryParams 
    
}

type RecipeAutoCompleteResponse struct {
    Body []byte 
    ContentType string 
    RecipeAutoComplete200ApplicationJSONStrings []string 
    RecipeAutoComplete200TextJSONStrings []string 
    StatusCode int64 
    
}

