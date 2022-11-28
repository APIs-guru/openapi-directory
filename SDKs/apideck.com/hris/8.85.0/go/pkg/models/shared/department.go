package shared

import (
	"time"
)

type Department struct {
	Code        *string    `json:"code,omitempty"`
	CreatedAt   *time.Time `json:"created_at,omitempty"`
	CreatedBy   *string    `json:"created_by,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	Name        *string    `json:"name,omitempty"`
	UpdatedAt   *time.Time `json:"updated_at,omitempty"`
	UpdatedBy   *string    `json:"updated_by,omitempty"`
}

type DepartmentInput struct {
	Code        *string `json:"code,omitempty"`
	Description *string `json:"description,omitempty"`
	Name        *string `json:"name,omitempty"`
}
