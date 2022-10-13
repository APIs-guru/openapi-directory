package shared

type SimpleCriterionForJob struct {
	Comparator *JobComparatorEnum            `json:"comparator"`
	Key        *SimpleCriterionKeyForJobEnum `json:"key"`
	Values     []string                      `json:"values"`
}
