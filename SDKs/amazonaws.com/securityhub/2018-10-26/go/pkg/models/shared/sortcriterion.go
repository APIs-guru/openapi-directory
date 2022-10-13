package shared

type SortCriterion struct {
	Field     *string        `json:"Field"`
	SortOrder *SortOrderEnum `json:"SortOrder"`
}
