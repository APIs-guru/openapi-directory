package shared

type CreateProjectVersionRequest struct {
	KmsKeyID     *string           `json:"KmsKeyId,omitempty"`
	OutputConfig OutputConfig      `json:"OutputConfig"`
	ProjectArn   string            `json:"ProjectArn"`
	Tags         map[string]string `json:"Tags,omitempty"`
	TestingData  TestingData       `json:"TestingData"`
	TrainingData TrainingData      `json:"TrainingData"`
	VersionName  string            `json:"VersionName"`
}
