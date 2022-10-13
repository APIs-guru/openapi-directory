package shared

import (
	"time"
)

type TaxDetailsAPIModel struct {
	CreatedOn  *time.Time `json:"CreatedOn"`
	ID         *int32     `json:"Id"`
	Name       *string    `json:"Name"`
	Percentage *float64   `json:"Percentage"`
}
