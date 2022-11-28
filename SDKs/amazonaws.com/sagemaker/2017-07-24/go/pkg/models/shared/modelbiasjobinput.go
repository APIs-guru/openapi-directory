package shared

// ModelBiasJobInput
// Inputs for the model bias job.
type ModelBiasJobInput struct {
	EndpointInput      EndpointInput                `json:"EndpointInput"`
	GroundTruthS3Input MonitoringGroundTruthS3Input `json:"GroundTruthS3Input"`
}
