package shared

import (
	"time"
)

type BigOvenModelAPIGroceryItem struct {
	BigOvenObject   *string    `json:"BigOvenObject"`
	CreationDate    *time.Time `json:"CreationDate"`
	Department      *string    `json:"Department"`
	DisplayQuantity *string    `json:"DisplayQuantity"`
	GUID            *string    `json:"GUID"`
	IsChecked       *bool      `json:"IsChecked"`
	ItemID          *int64     `json:"ItemID"`
	LastModified    *time.Time `json:"LastModified"`
	LocalStatus     *string    `json:"LocalStatus"`
	Name            *string    `json:"Name"`
	Notes           *string    `json:"Notes"`
	RecipeID        *int32     `json:"RecipeID"`
	ThirdPartyURL   *string    `json:"ThirdPartyURL"`
}
