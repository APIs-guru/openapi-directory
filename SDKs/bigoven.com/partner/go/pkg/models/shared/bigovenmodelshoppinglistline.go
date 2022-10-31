package shared

import (
"time")

type BigOvenModelShoppingListLine struct {
    DateAdded *time.Time `json:"DateAdded,omitempty"`
    Dept *string `json:"Dept,omitempty"`
    GUID *string `json:"GUID,omitempty"`
    HTMLItemName *string `json:"HTMLItemName,omitempty"`
    IsChecked *bool `json:"IsChecked,omitempty"`
    ItemName *string `json:"ItemName,omitempty"`
    LastModified *time.Time `json:"LastModified,omitempty"`
    ListID *int64 `json:"ListID,omitempty"`
    MealPlanID *int32 `json:"MealPlanID,omitempty"`
    MealPlanObjectType *int32 `json:"MealPlanObjectType,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    PendingAddition *bool `json:"PendingAddition,omitempty"`
    RecipeID *int32 `json:"RecipeID,omitempty"`
    ShoppingListLineID *int64 `json:"ShoppingListLineID,omitempty"`
    Store *string `json:"Store,omitempty"`
    TextAmt *string `json:"TextAmt,omitempty"`
    ThirdPartyHost *string `json:"ThirdPartyHost,omitempty"`
    ThirdPartyTitle *string `json:"ThirdPartyTitle,omitempty"`
    ThirdPartyURL *string `json:"ThirdPartyURL,omitempty"`
    
}

