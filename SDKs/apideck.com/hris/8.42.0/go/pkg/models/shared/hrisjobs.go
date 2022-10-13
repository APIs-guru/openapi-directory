package shared

type HrisJobs struct {
	Employee *Employee `json:"employee"`
	Jobs     []HrisJob `json:"jobs"`
}
