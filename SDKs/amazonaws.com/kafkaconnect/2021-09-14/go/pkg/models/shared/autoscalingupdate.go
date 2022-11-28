package shared

// AutoScalingUpdate
// The updates to the auto scaling parameters for the connector.
type AutoScalingUpdate struct {
	MaxWorkerCount int64                `json:"maxWorkerCount"`
	McuCount       int64                `json:"mcuCount"`
	MinWorkerCount int64                `json:"minWorkerCount"`
	ScaleInPolicy  ScaleInPolicyUpdate  `json:"scaleInPolicy"`
	ScaleOutPolicy ScaleOutPolicyUpdate `json:"scaleOutPolicy"`
}
