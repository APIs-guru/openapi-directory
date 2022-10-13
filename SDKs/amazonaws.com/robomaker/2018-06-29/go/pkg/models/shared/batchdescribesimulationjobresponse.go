package shared

type BatchDescribeSimulationJobResponse struct {
	Jobs            []SimulationJob `json:"jobs"`
	UnprocessedJobs []string        `json:"unprocessedJobs"`
}
