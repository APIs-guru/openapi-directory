package shared

// ListJobsFilterTerm
// Specifies a condition that filters the results of a request for information about classification jobs. Each condition consists of a property, an operator, and one or more values.
type ListJobsFilterTerm struct {
	Comparator *JobComparatorEnum     `json:"comparator,omitempty"`
	Key        *ListJobsFilterKeyEnum `json:"key,omitempty"`
	Values     []string               `json:"values,omitempty"`
}
