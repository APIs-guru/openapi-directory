package shared

type ContinuousParameterRange struct {
	MaxValue    string                         `json:"MaxValue"`
	MinValue    string                         `json:"MinValue"`
	Name        string                         `json:"Name"`
	ScalingType *HyperParameterScalingTypeEnum `json:"ScalingType"`
}
