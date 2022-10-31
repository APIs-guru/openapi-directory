package shared



type AddApplicationCloudWatchLoggingOptionResponse struct {
    ApplicationArn *string `json:"ApplicationARN,omitempty"`
    ApplicationVersionID *int64 `json:"ApplicationVersionId,omitempty"`
    CloudWatchLoggingOptionDescriptions []CloudWatchLoggingOptionDescription `json:"CloudWatchLoggingOptionDescriptions,omitempty"`
    
}

