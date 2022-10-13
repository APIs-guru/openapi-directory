package shared

import (
	"time"
)

type BigOvenModelApi2RecipeNote struct {
	CreationDate *time.Time `json:"CreationDate"`
	Date         *string    `json:"Date"`
	DateDt       *time.Time `json:"DateDT"`
	GUID         *string    `json:"GUID"`
	ID           *int32     `json:"ID"`
	Notes        *string    `json:"Notes"`
	People       *string    `json:"People"`
	RecipeID     *int32     `json:"RecipeID"`
	UserID       *int32     `json:"UserID"`
	Variations   *string    `json:"Variations"`
}
