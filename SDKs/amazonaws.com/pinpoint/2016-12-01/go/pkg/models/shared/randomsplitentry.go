package shared

// RandomSplitEntry
// Specifies the settings for a path in a random split activity in a journey.
type RandomSplitEntry struct {
	NextActivity *string `json:"NextActivity,omitempty"`
	Percentage   *int64  `json:"Percentage,omitempty"`
}
