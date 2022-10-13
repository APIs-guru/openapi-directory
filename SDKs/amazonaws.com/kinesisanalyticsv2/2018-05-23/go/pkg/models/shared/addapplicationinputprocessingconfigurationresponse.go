package shared

type AddApplicationInputProcessingConfigurationResponse struct {
	ApplicationArn                          *string                                  `json:"ApplicationARN"`
	ApplicationVersionID                    *int64                                   `json:"ApplicationVersionId"`
	InputID                                 *string                                  `json:"InputId"`
	InputProcessingConfigurationDescription *InputProcessingConfigurationDescription `json:"InputProcessingConfigurationDescription"`
}
