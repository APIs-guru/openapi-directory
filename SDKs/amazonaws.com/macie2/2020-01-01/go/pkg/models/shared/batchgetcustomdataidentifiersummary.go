package shared

import (
	"time"
)

type BatchGetCustomDataIdentifierSummary struct {
	Arn         *string    `json:"arn"`
	CreatedAt   *time.Time `json:"createdAt"`
	Deleted     *bool      `json:"deleted"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	Name        *string    `json:"name"`
}
