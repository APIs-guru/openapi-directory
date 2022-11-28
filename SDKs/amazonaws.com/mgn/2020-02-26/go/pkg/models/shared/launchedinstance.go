package shared

// LaunchedInstance
// Configure launced instance.
type LaunchedInstance struct {
	Ec2InstanceID *string        `json:"ec2InstanceID,omitempty"`
	FirstBoot     *FirstBootEnum `json:"firstBoot,omitempty"`
	JobID         *string        `json:"jobID,omitempty"`
}
