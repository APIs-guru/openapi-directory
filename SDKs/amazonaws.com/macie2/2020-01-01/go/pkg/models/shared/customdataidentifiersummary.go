package shared

import (
	"time"
)

type CustomDataIdentifierSummary struct {
	Arn         *string    `json:"arn,omitempty"`
	CreatedAt   *time.Time `json:"createdAt,omitempty"`
	Description *string    `json:"description,omitempty"`
	ID          *string    `json:"id,omitempty"`
	Name        *string    `json:"name,omitempty"`
}
