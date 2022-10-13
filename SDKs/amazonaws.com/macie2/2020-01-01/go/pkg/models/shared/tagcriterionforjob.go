package shared

type TagCriterionForJob struct {
	Comparator *JobComparatorEnum       `json:"comparator"`
	TagValues  []TagCriterionPairForJob `json:"tagValues"`
}
