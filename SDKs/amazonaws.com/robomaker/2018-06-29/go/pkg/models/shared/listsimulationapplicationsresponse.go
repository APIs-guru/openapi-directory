package shared

type ListSimulationApplicationsResponse struct {
	NextToken                      *string                        `json:"nextToken"`
	SimulationApplicationSummaries []SimulationApplicationSummary `json:"simulationApplicationSummaries"`
}
