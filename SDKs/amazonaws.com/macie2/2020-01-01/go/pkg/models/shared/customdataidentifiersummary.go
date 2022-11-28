package shared

import (
	"time"
)

// CustomDataIdentifierSummary
// Provides information about a custom data identifier.
type CustomDataIdentifierSummary struct {
	Arn         *string    `json:"arn,omitempty"`
	CreatedAt   *time.Time `json:"createdAt,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	Name        *string    `json:"name,omitempty"`
}
