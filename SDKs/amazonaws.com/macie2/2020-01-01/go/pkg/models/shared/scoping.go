package shared

type Scoping struct {
	Excludes *JobScopingBlock `json:"excludes,omitempty"`
	Includes *JobScopingBlock `json:"includes,omitempty"`
}
