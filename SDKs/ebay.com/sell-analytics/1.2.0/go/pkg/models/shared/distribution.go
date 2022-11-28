package shared

// Distribution
// This complex type defines of a piece of data that is grouped by the associated basis. It contains the name for the data set and its associated value.
type Distribution struct {
	Name  *string `json:"name,omitempty"`
	Value *string `json:"value,omitempty"`
}
