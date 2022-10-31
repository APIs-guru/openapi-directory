package shared



type ListSimulationJobsResponse struct {
    NextToken *string `json:"nextToken,omitempty"`
    SimulationJobSummaries []SimulationJobSummary `json:"simulationJobSummaries"`
    
}

