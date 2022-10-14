package shared

type DeleteApplicationInputProcessingConfigurationResponse struct {
	ApplicationArn       *string `json:"ApplicationARN,omitempty"`
	ApplicationVersionID *int64  `json:"ApplicationVersionId,omitempty"`
}
