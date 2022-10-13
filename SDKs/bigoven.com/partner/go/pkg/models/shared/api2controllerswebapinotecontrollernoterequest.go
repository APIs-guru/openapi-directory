package shared

import (
	"time"
)

type Api2ControllersWebAPINoteControllerNoteRequest struct {
	CreationDate *time.Time `json:"CreationDate" form:"name=CreationDate"`
	Date         *time.Time `json:"Date" form:"name=Date"`
	DateDt       *string    `json:"DateDT" form:"name=DateDT"`
	GUID         *string    `json:"GUID" form:"name=GUID"`
	ID           *int32     `json:"ID" form:"name=ID"`
	Notes        *string    `json:"Notes" form:"name=Notes"`
	People       *string    `json:"People" form:"name=People"`
	RecipeID     *int32     `json:"RecipeID" form:"name=RecipeID"`
	UserID       *int32     `json:"UserID" form:"name=UserID"`
	Variations   *string    `json:"Variations" form:"name=Variations"`
}
