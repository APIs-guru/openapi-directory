package shared

import (
"time")

type BigOvenModelAPIGroceryItem struct {
    BigOvenObject *string `json:"BigOvenObject,omitempty"`
    CreationDate *time.Time `json:"CreationDate,omitempty"`
    Department *string `json:"Department,omitempty"`
    DisplayQuantity *string `json:"DisplayQuantity,omitempty"`
    GUID *string `json:"GUID,omitempty"`
    IsChecked *bool `json:"IsChecked,omitempty"`
    ItemID *int64 `json:"ItemID,omitempty"`
    LastModified *time.Time `json:"LastModified,omitempty"`
    LocalStatus *string `json:"LocalStatus,omitempty"`
    Name *string `json:"Name,omitempty"`
    Notes *string `json:"Notes,omitempty"`
    RecipeID *int32 `json:"RecipeID,omitempty"`
    ThirdPartyURL *string `json:"ThirdPartyURL,omitempty"`
    
}

