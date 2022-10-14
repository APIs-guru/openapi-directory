package shared

type ProgressDetail struct {
	CurrentProgress               *RobotDeploymentStepEnum `json:"currentProgress,omitempty"`
	EstimatedTimeRemainingSeconds *int64                   `json:"estimatedTimeRemainingSeconds,omitempty"`
	PercentDone                   *float32                 `json:"percentDone,omitempty"`
	TargetResource                *string                  `json:"targetResource,omitempty"`
}
