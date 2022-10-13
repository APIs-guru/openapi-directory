package shared

type ListSimulationJobsResponse struct {
	NextToken              *string                `json:"nextToken"`
	SimulationJobSummaries []SimulationJobSummary `json:"simulationJobSummaries"`
}
