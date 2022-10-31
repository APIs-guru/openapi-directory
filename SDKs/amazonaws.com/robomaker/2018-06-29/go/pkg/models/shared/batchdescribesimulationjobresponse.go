package shared



type BatchDescribeSimulationJobResponse struct {
    Jobs []SimulationJob `json:"jobs,omitempty"`
    UnprocessedJobs []string `json:"unprocessedJobs,omitempty"`
    
}

