package shared

import (
	"time"
)

type CustomDataIdentifierSummary struct {
	Arn         *string    `json:"arn"`
	CreatedAt   *time.Time `json:"createdAt"`
	Description *string    `json:"description"`
	ID          *string    `json:"id"`
	Name        *string    `json:"name"`
}
