package shared

import (
	"time"
)

// BlacklistEntry
// An object that contains information about a blacklisting event that impacts one of the dedicated IP addresses that is associated with your account.
type BlacklistEntry struct {
	Description *string    `json:"Description,omitempty"`
	ListingTime *time.Time `json:"ListingTime,omitempty"`
	RblName     *string    `json:"RblName,omitempty"`
}
