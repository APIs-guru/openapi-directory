package shared

// SortCriterion
// A collection of finding attributes used to sort findings.
type SortCriterion struct {
	Field     *string        `json:"Field,omitempty"`
	SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
}
