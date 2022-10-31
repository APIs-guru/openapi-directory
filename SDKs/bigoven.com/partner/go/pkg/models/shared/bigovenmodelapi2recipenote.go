package shared

import (
"time")

type BigOvenModelApi2RecipeNote struct {
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Date *string `json:"Date,omitempty"`
    DateDt *time.Time `json:"DateDT,omitempty"`
    GUID *string `json:"GUID,omitempty"`
    ID *int32 `json:"ID,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    People *string `json:"People,omitempty"`
    RecipeID *int32 `json:"RecipeID,omitempty"`
    UserID *int32 `json:"UserID,omitempty"`
    Variations *string `json:"Variations,omitempty"`
    
}

