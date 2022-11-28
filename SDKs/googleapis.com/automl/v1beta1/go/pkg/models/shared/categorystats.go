package shared

// CategoryStats
// The data statistics of a series of CATEGORY values.
type CategoryStats struct {
	TopCategoryStats []SingleCategoryStats `json:"topCategoryStats,omitempty"`
}
