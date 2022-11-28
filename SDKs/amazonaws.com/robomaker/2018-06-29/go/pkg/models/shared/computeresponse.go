package shared

// ComputeResponse
// Compute information for the simulation job
type ComputeResponse struct {
	SimulationUnitLimit *int64 `json:"simulationUnitLimit,omitempty"`
}
