package shared

import (
	"time"
)

type BigOvenModelApi2GroceryList struct {
	Items        []BigOvenModelAPIGroceryItem  `json:"Items,omitempty"`
	LastModified *time.Time                    `json:"LastModified,omitempty"`
	Recipes      []BigOvenModelApi2RecipeInfox `json:"Recipes,omitempty"`
	VersionGUID  *string                       `json:"VersionGuid,omitempty"`
}
