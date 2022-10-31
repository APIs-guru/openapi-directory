package shared

type UpdateShardCountInput struct {
	ScalingType      ScalingTypeEnum `json:"ScalingType"`
	StreamName       string          `json:"StreamName"`
	TargetShardCount int64           `json:"TargetShardCount"`
}
