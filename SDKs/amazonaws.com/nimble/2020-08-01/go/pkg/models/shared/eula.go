package shared

import (
	"time"
)

// Eula
// Represents a EULA resource.
type Eula struct {
	Content   *string    `json:"content,omitempty"`
	CreatedAt *time.Time `json:"createdAt,omitempty"`
	EulaID    *string    `json:"eulaId,omitempty"`
	Name      *string    `json:"name,omitempty"`
	UpdatedAt *time.Time `json:"updatedAt,omitempty"`
}
