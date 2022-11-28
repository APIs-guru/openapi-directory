package shared

// Pagination
// The Pagination Object contains information relating to the number of total results available as well as the number of results fetched and their relative positions.
type Pagination struct {
	Count      *int32 `json:"count,omitempty"`
	Offset     *int32 `json:"offset,omitempty"`
	TotalCount *int32 `json:"total_count,omitempty"`
}
