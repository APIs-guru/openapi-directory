package shared

type ListJobsFilterTerm struct {
	Comparator *JobComparatorEnum     `json:"comparator"`
	Key        *ListJobsFilterKeyEnum `json:"key"`
	Values     []string               `json:"values"`
}
