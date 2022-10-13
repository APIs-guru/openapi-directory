package shared

type AutoScalingDescription struct {
	MaxWorkerCount *int64                     `json:"maxWorkerCount"`
	McuCount       *int64                     `json:"mcuCount"`
	MinWorkerCount *int64                     `json:"minWorkerCount"`
	ScaleInPolicy  *ScaleInPolicyDescription  `json:"scaleInPolicy"`
	ScaleOutPolicy *ScaleOutPolicyDescription `json:"scaleOutPolicy"`
}
