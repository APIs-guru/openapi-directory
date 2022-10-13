package shared

import (
	"time"
)

type GetCustomDataIdentifierResponse struct {
	Arn                  *string           `json:"arn"`
	CreatedAt            *time.Time        `json:"createdAt"`
	Deleted              *bool             `json:"deleted"`
	Description          *string           `json:"description"`
	ID                   *string           `json:"id"`
	IgnoreWords          []string          `json:"ignoreWords"`
	Keywords             []string          `json:"keywords"`
	MaximumMatchDistance *int64            `json:"maximumMatchDistance"`
	Name                 *string           `json:"name"`
	Regex                *string           `json:"regex"`
	Tags                 map[string]string `json:"tags"`
}
