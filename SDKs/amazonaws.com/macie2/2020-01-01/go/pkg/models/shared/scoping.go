package shared

// Scoping
// Specifies one or more property- and tag-based conditions that define criteria for including or excluding S3 objects from a classification job. Exclude conditions take precedence over include conditions.
type Scoping struct {
	Excludes *JobScopingBlock `json:"excludes,omitempty"`
	Includes *JobScopingBlock `json:"includes,omitempty"`
}
