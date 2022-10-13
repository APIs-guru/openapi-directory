package shared

import (
	"time"
)

type ListEndpointConfigsInput struct {
	CreationTimeAfter  *time.Time                 `json:"CreationTimeAfter"`
	CreationTimeBefore *time.Time                 `json:"CreationTimeBefore"`
	MaxResults         *int64                     `json:"MaxResults"`
	NameContains       *string                    `json:"NameContains"`
	NextToken          *string                    `json:"NextToken"`
	SortBy             *EndpointConfigSortKeyEnum `json:"SortBy"`
	SortOrder          *OrderKeyEnum              `json:"SortOrder"`
}
