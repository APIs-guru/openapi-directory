package shared

import (
	"time"
)

type GetCustomDataIdentifierResponse struct {
	Arn                  *string           `json:"arn,omitempty"`
	CreatedAt            *time.Time        `json:"createdAt,omitempty"`
	Deleted              *bool             `json:"deleted,omitempty"`
	Description          *string           `json:"description,omitempty"`
	ID                   *string           `json:"id,omitempty"`
	IgnoreWords          []string          `json:"ignoreWords,omitempty"`
	Keywords             []string          `json:"keywords,omitempty"`
	MaximumMatchDistance *int64            `json:"maximumMatchDistance,omitempty"`
	Name                 *string           `json:"name,omitempty"`
	Regex                *string           `json:"regex,omitempty"`
	Tags                 map[string]string `json:"tags,omitempty"`
}
