package shared

type AutoScaling struct {
	MaxWorkerCount int64           `json:"maxWorkerCount"`
	McuCount       int64           `json:"mcuCount"`
	MinWorkerCount int64           `json:"minWorkerCount"`
	ScaleInPolicy  *ScaleInPolicy  `json:"scaleInPolicy,omitempty"`
	ScaleOutPolicy *ScaleOutPolicy `json:"scaleOutPolicy,omitempty"`
}
