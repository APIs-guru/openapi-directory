package shared

type SimpleCriterionForJob struct {
	Comparator *JobComparatorEnum            `json:"comparator,omitempty"`
	Key        *SimpleCriterionKeyForJobEnum `json:"key,omitempty"`
	Values     []string                      `json:"values,omitempty"`
}
