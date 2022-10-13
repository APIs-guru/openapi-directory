package shared

type ModelBiasJobInput struct {
	EndpointInput      EndpointInput                `json:"EndpointInput"`
	GroundTruthS3Input MonitoringGroundTruthS3Input `json:"GroundTruthS3Input"`
}
