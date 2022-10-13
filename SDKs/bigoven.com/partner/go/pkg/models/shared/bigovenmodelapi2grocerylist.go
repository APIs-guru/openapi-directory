package shared

import (
	"time"
)

type BigOvenModelApi2GroceryList struct {
	Items        []BigOvenModelAPIGroceryItem  `json:"Items"`
	LastModified *time.Time                    `json:"LastModified"`
	Recipes      []BigOvenModelApi2RecipeInfox `json:"Recipes"`
	VersionGUID  *string                       `json:"VersionGuid"`
}
