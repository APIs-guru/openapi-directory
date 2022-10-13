package shared

type InstanceHealthSummary struct {
	InstanceHealth       *InstanceHealthStateEnum  `json:"instanceHealth"`
	InstanceHealthReason *InstanceHealthReasonEnum `json:"instanceHealthReason"`
	InstanceName         *string                   `json:"instanceName"`
}
