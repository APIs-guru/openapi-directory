package shared

import (
	"time"
)

type OrderType struct {
	CreatedAt *time.Time `json:"created_at"`
	CreatedBy *string    `json:"created_by"`
	Default   *bool      `json:"default"`
	ID        *string    `json:"id"`
	Name      *string    `json:"name"`
	UpdatedAt *time.Time `json:"updated_at"`
	UpdatedBy *string    `json:"updated_by"`
}
