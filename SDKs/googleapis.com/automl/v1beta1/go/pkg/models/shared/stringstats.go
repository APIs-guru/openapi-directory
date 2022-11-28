package shared

// StringStats
// The data statistics of a series of STRING values.
type StringStats struct {
	TopUnigramStats []UnigramStats `json:"topUnigramStats,omitempty"`
}
