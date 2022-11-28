package shared

// SimpleCriterionForJob
// Specifies a property-based condition that determines whether an S3 bucket is included or excluded from a classification job.
type SimpleCriterionForJob struct {
	Comparator *JobComparatorEnum            `json:"comparator,omitempty"`
	Key        *SimpleCriterionKeyForJobEnum `json:"key,omitempty"`
	Values     []string                      `json:"values,omitempty"`
}
