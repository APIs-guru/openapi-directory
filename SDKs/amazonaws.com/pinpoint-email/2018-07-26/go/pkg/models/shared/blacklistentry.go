package shared

import (
	"time"
)

type BlacklistEntry struct {
	Description *string    `json:"Description,omitempty"`
	ListingTime *time.Time `json:"ListingTime,omitempty"`
	RblName     *string    `json:"RblName,omitempty"`
}
