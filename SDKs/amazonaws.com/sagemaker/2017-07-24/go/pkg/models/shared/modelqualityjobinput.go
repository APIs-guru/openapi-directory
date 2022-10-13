package shared

type ModelQualityJobInput struct {
	EndpointInput      EndpointInput                `json:"EndpointInput"`
	GroundTruthS3Input MonitoringGroundTruthS3Input `json:"GroundTruthS3Input"`
}
