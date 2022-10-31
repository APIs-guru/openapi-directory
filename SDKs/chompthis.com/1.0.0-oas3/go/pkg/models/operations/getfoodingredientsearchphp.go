package operations

import (
"openapi/pkg/models/shared")

type GetFoodIngredientSearchPhpQueryParams struct {
    Find string `queryParam:"style=form,explode=true,name=find"`
    Limit *int64 `queryParam:"style=form,explode=true,name=limit"`
    
}

type GetFoodIngredientSearchPhpSecurity struct {
    APIKeyAuth shared.SchemeAPIKeyAuth `security:"scheme,type=apiKey,subtype=query"`
    
}

type GetFoodIngredientSearchPhpRequest struct {
    QueryParams GetFoodIngredientSearchPhpQueryParams 
    Security GetFoodIngredientSearchPhpSecurity 
    
}

type GetFoodIngredientSearchPhpResponse struct {
    ContentType string 
    IngredientObject *shared.IngredientObject 
    StatusCode int64 
    
}

