package shared

type IntegerParameterRange struct {
	MaxValue    string                         `json:"MaxValue"`
	MinValue    string                         `json:"MinValue"`
	Name        string                         `json:"Name"`
	ScalingType *HyperParameterScalingTypeEnum `json:"ScalingType,omitempty"`
}
