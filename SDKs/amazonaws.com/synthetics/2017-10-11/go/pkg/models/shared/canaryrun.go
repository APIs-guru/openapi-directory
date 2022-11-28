package shared

// CanaryRun
// This structure contains the details about one run of one canary.
type CanaryRun struct {
	ArtifactS3Location *string            `json:"ArtifactS3Location,omitempty"`
	ID                 *string            `json:"Id,omitempty"`
	Name               *string            `json:"Name,omitempty"`
	Status             *CanaryRunStatus   `json:"Status,omitempty"`
	Timeline           *CanaryRunTimeline `json:"Timeline,omitempty"`
}
