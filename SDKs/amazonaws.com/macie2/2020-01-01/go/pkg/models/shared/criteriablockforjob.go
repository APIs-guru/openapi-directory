package shared

// CriteriaBlockForJob
// Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job.
type CriteriaBlockForJob struct {
	And []CriteriaForJob `json:"and,omitempty"`
}
