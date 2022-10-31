package shared

type ListSimulationJobBatchesResponse struct {
	NextToken                   *string                     `json:"nextToken,omitempty"`
	SimulationJobBatchSummaries []SimulationJobBatchSummary `json:"simulationJobBatchSummaries,omitempty"`
}
