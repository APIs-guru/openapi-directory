package shared

type AddApplicationInputProcessingConfigurationResponse struct {
	ApplicationArn                          *string                                  `json:"ApplicationARN,omitempty"`
	ApplicationVersionID                    *int64                                   `json:"ApplicationVersionId,omitempty"`
	InputID                                 *string                                  `json:"InputId,omitempty"`
	InputProcessingConfigurationDescription *InputProcessingConfigurationDescription `json:"InputProcessingConfigurationDescription,omitempty"`
}
