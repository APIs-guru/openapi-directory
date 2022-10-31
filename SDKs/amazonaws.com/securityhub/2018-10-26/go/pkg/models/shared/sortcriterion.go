package shared

type SortCriterion struct {
	Field     *string        `json:"Field,omitempty"`
	SortOrder *SortOrderEnum `json:"SortOrder,omitempty"`
}
