package shared

import (
	"time"
)

type BigOvenModelAPIGroceryGroceryListInput struct {
	Items        []BigOvenModelAPIGroceryItem     `json:"Items,omitempty"`
	LastModified *time.Time                       `json:"LastModified,omitempty"`
	Recipes      []BigOvenModelAPIRecipeInfoInput `json:"Recipes,omitempty"`
	VersionGUID  *string                          `json:"VersionGuid,omitempty"`
}
