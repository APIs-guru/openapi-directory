package shared

import (
	"time"
)

type TaxDetailsAPIModel struct {
	CreatedOn  *time.Time `json:"CreatedOn,omitempty"`
	ID         *int32     `json:"Id,omitempty"`
	Name       *string    `json:"Name,omitempty"`
	Percentage *float64   `json:"Percentage,omitempty"`
}
