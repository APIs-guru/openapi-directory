package shared

// S3BucketCriteriaForJob
// Specifies property- and tag-based conditions that define criteria for including or excluding S3 buckets from a classification job. Exclude conditions take precedence over include conditions.
type S3BucketCriteriaForJob struct {
	Excludes *CriteriaBlockForJob `json:"excludes,omitempty"`
	Includes *CriteriaBlockForJob `json:"includes,omitempty"`
}
