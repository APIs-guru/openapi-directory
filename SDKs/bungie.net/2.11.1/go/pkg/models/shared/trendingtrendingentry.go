package shared

import (
	"time"
)

// TrendingTrendingEntry
// The list entry view for trending items. Returns just enough to show the item on the trending page.
type TrendingTrendingEntry struct {
	CreationDate *time.Time
	DisplayName  *string
	EndDate      *time.Time
	EntityType   *int32
	FeatureImage *string
	Identifier   *string
	Image        *string
	IsFeatured   *bool
	Items        []TrendingTrendingEntry
	Link         *string
	Mp4Video     *string
	StartDate    *time.Time
	Tagline      *string
	WebmVideo    *string
	Weight       *float64
}
