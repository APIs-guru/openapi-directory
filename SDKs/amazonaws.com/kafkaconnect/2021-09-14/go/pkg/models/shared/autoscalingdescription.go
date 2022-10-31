package shared

type AutoScalingDescription struct {
	MaxWorkerCount *int64                     `json:"maxWorkerCount,omitempty"`
	McuCount       *int64                     `json:"mcuCount,omitempty"`
	MinWorkerCount *int64                     `json:"minWorkerCount,omitempty"`
	ScaleInPolicy  *ScaleInPolicyDescription  `json:"scaleInPolicy,omitempty"`
	ScaleOutPolicy *ScaleOutPolicyDescription `json:"scaleOutPolicy,omitempty"`
}
