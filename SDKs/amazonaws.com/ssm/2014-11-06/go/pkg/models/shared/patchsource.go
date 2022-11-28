package shared

// PatchSource
// Information about the patches to use to update the instances, including target operating systems and source repository. Applies to Linux instances only.
type PatchSource struct {
	Configuration string   `json:"Configuration"`
	Name          string   `json:"Name"`
	Products      []string `json:"Products"`
}
