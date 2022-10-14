package shared

type HrisJobs struct {
	Employee *Employee `json:"employee,omitempty"`
	Jobs     []HrisJob `json:"jobs,omitempty"`
}
