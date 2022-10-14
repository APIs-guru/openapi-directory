package shared

type ListJobsFilterTerm struct {
	Comparator *JobComparatorEnum     `json:"comparator,omitempty"`
	Key        *ListJobsFilterKeyEnum `json:"key,omitempty"`
	Values     []string               `json:"values,omitempty"`
}
