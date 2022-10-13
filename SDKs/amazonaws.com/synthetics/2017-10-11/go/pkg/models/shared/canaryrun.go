package shared

type CanaryRun struct {
	ArtifactS3Location *string            `json:"ArtifactS3Location"`
	ID                 *string            `json:"Id"`
	Name               *string            `json:"Name"`
	Status             *CanaryRunStatus   `json:"Status"`
	Timeline           *CanaryRunTimeline `json:"Timeline"`
}
