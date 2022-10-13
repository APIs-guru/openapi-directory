package shared

import (
	"time"
)

type BigOvenModelShoppingListLine struct {
	DateAdded          *time.Time `json:"DateAdded"`
	Dept               *string    `json:"Dept"`
	GUID               *string    `json:"GUID"`
	HTMLItemName       *string    `json:"HTMLItemName"`
	IsChecked          *bool      `json:"IsChecked"`
	ItemName           *string    `json:"ItemName"`
	LastModified       *time.Time `json:"LastModified"`
	ListID             *int64     `json:"ListID"`
	MealPlanID         *int32     `json:"MealPlanID"`
	MealPlanObjectType *int32     `json:"MealPlanObjectType"`
	Notes              *string    `json:"Notes"`
	PendingAddition    *bool      `json:"PendingAddition"`
	RecipeID           *int32     `json:"RecipeID"`
	ShoppingListLineID *int64     `json:"ShoppingListLineID"`
	Store              *string    `json:"Store"`
	TextAmt            *string    `json:"TextAmt"`
	ThirdPartyHost     *string    `json:"ThirdPartyHost"`
	ThirdPartyTitle    *string    `json:"ThirdPartyTitle"`
	ThirdPartyURL      *string    `json:"ThirdPartyURL"`
}
