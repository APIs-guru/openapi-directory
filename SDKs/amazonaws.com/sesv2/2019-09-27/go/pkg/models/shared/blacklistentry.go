package shared

import (
	"time"
)

type BlacklistEntry struct {
	Description *string    `json:"Description"`
	ListingTime *time.Time `json:"ListingTime"`
	RblName     *string    `json:"RblName"`
}
