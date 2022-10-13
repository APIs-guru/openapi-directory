package shared

type LaunchedInstance struct {
	Ec2InstanceID *string        `json:"ec2InstanceID"`
	FirstBoot     *FirstBootEnum `json:"firstBoot"`
	JobID         *string        `json:"jobID"`
}
