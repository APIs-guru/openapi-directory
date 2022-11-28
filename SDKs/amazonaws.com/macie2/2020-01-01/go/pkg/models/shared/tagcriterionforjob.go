package shared

// TagCriterionForJob
// Specifies a tag-based condition that determines whether an S3 bucket is included or excluded from a classification job.
type TagCriterionForJob struct {
	Comparator *JobComparatorEnum       `json:"comparator,omitempty"`
	TagValues  []TagCriterionPairForJob `json:"tagValues,omitempty"`
}
