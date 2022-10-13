package shared

import (
	"time"
)

type Tender struct {
	Active          *bool      `json:"active"`
	AllowsTipping   *bool      `json:"allows_tipping"`
	CreatedAt       *time.Time `json:"created_at"`
	CreatedBy       *string    `json:"created_by"`
	Editable        *bool      `json:"editable"`
	Hidden          *bool      `json:"hidden"`
	ID              *string    `json:"id"`
	Key             *string    `json:"key"`
	Label           *string    `json:"label"`
	OpensCashDrawer *bool      `json:"opens_cash_drawer"`
	UpdatedAt       *time.Time `json:"updated_at"`
	UpdatedBy       *string    `json:"updated_by"`
}
