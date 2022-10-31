package operations

import (
"openapi/pkg/models/shared")

type RecipeFeedbackPathParams struct {
    RecipeID int32 `pathParam:"style=simple,explode=false,name=recipeId"`
    
}

type RecipeFeedbackRequests struct {
    Api2ModelsRecipesFeedbackDto *shared.Api2ModelsRecipesFeedbackDto `request:"mediaType=application/json"`
    Api2ModelsRecipesFeedbackDto1 *shared.Api2ModelsRecipesFeedbackDto `request:"mediaType=application/x-www-form-urlencoded"`
    Api2ModelsRecipesFeedbackDto2 *shared.Api2ModelsRecipesFeedbackDto `request:"mediaType=text/json"`
    ApplicationXML []byte `request:"mediaType=application/xml"`
    TextXML []byte `request:"mediaType=text/xml"`
    
}

type RecipeFeedbackRequest struct {
    PathParams RecipeFeedbackPathParams 
    Request RecipeFeedbackRequests 
    
}

type RecipeFeedbackResponse struct {
    Body []byte 
    ContentType string 
    StatusCode int64 
    SystemObject map[string]interface{} 
    
}

