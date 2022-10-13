package shared

type ProgressDetail struct {
	CurrentProgress               *RobotDeploymentStepEnum `json:"currentProgress"`
	EstimatedTimeRemainingSeconds *int64                   `json:"estimatedTimeRemainingSeconds"`
	PercentDone                   *float32                 `json:"percentDone"`
	TargetResource                *string                  `json:"targetResource"`
}
