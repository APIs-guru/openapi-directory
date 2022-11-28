package shared

// ModelQualityJobInput
// The input for the model quality monitoring job. Currently endponts are supported for input for model quality monitoring jobs.
type ModelQualityJobInput struct {
	EndpointInput      EndpointInput                `json:"EndpointInput"`
	GroundTruthS3Input MonitoringGroundTruthS3Input `json:"GroundTruthS3Input"`
}
