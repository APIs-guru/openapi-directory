package shared

type ListSimulationJobBatchesResponse struct {
	NextToken                   *string                     `json:"nextToken"`
	SimulationJobBatchSummaries []SimulationJobBatchSummary `json:"simulationJobBatchSummaries"`
}
