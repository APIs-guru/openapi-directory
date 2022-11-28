package shared

// JobScopingBlock
// Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job.
type JobScopingBlock struct {
	And []JobScopeTerm `json:"and,omitempty"`
}
