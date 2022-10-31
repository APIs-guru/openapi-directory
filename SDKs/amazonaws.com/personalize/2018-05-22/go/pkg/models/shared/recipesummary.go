package shared

import (
"time")

type RecipeSummary struct {
    CreationDateTime *time.Time `json:"creationDateTime,omitempty"`
    LastUpdatedDateTime *time.Time `json:"lastUpdatedDateTime,omitempty"`
    Name *string `json:"name,omitempty"`
    RecipeArn *string `json:"recipeArn,omitempty"`
    Status *string `json:"status,omitempty"`
    
}

