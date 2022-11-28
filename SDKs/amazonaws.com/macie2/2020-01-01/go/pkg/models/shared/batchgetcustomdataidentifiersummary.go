package shared

import (
	"time"
)

// BatchGetCustomDataIdentifierSummary
// Provides information about a custom data identifier.
type BatchGetCustomDataIdentifierSummary struct {
	Arn         *string    `json:"arn,omitempty"`
	CreatedAt   *time.Time `json:"createdAt,omitempty"`
	Deleted     *bool      `json:"deleted,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	Name        *string    `json:"name,omitempty"`
}
