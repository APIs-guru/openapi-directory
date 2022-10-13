package shared

type Scoping struct {
	Excludes *JobScopingBlock `json:"excludes"`
	Includes *JobScopingBlock `json:"includes"`
}
