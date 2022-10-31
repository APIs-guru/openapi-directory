package shared

type AddApplicationInputProcessingConfigurationRequest struct {
	ApplicationName              string                       `json:"ApplicationName"`
	CurrentApplicationVersionID  int64                        `json:"CurrentApplicationVersionId"`
	InputID                      string                       `json:"InputId"`
	InputProcessingConfiguration InputProcessingConfiguration `json:"InputProcessingConfiguration"`
}
