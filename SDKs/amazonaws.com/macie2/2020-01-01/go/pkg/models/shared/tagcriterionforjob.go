package shared

type TagCriterionForJob struct {
	Comparator *JobComparatorEnum       `json:"comparator,omitempty"`
	TagValues  []TagCriterionPairForJob `json:"tagValues,omitempty"`
}
