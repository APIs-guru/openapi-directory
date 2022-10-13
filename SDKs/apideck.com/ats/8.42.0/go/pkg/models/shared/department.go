package shared

import (
	"time"
)

type Department struct {
	Code        *string    `json:"code"`
	CreatedAt   *time.Time `json:"created_at"`
	CreatedBy   *string    `json:"created_by"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	Name        *string    `json:"name"`
	UpdatedAt   *time.Time `json:"updated_at"`
	UpdatedBy   *string    `json:"updated_by"`
}
