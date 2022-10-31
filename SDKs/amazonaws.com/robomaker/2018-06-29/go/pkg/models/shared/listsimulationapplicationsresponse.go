package shared

type ListSimulationApplicationsResponse struct {
	NextToken                      *string                        `json:"nextToken,omitempty"`
	SimulationApplicationSummaries []SimulationApplicationSummary `json:"simulationApplicationSummaries,omitempty"`
}
