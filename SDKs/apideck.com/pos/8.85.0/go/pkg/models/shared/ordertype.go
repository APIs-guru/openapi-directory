package shared

import (
	"time"
)

type OrderType struct {
	CreatedAt *time.Time `json:"created_at,omitempty"`
	CreatedBy *string    `json:"created_by,omitempty"`
	Default   *bool      `json:"default,omitempty"`
	ID        *string    `json:"id,omitempty"`
	Name      *string    `json:"name,omitempty"`
	UpdatedAt *time.Time `json:"updated_at,omitempty"`
	UpdatedBy *string    `json:"updated_by,omitempty"`
}

type OrderTypeInput struct {
	Default *bool   `json:"default,omitempty"`
	Name    *string `json:"name,omitempty"`
}
