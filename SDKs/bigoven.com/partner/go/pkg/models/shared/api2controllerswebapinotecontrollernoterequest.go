package shared

import (
	"time"
)

type Api2ControllersWebAPINoteControllerNoteRequest struct {
	CreationDate *time.Time `json:"CreationDate,omitempty" form:"name=CreationDate"`
	Date         *time.Time `json:"Date,omitempty" form:"name=Date"`
	DateDt       *string    `json:"DateDT,omitempty" form:"name=DateDT"`
	GUID         *string    `json:"GUID,omitempty" form:"name=GUID"`
	ID           *int32     `json:"ID,omitempty" form:"name=ID"`
	Notes        *string    `json:"Notes,omitempty" form:"name=Notes"`
	People       *string    `json:"People,omitempty" form:"name=People"`
	RecipeID     *int32     `json:"RecipeID,omitempty" form:"name=RecipeID"`
	UserID       *int32     `json:"UserID,omitempty" form:"name=UserID"`
	Variations   *string    `json:"Variations,omitempty" form:"name=Variations"`
}
