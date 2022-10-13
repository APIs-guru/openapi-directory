package shared

type AddApplicationCloudWatchLoggingOptionResponse struct {
	ApplicationArn                      *string                              `json:"ApplicationARN"`
	ApplicationVersionID                *int64                               `json:"ApplicationVersionId"`
	CloudWatchLoggingOptionDescriptions []CloudWatchLoggingOptionDescription `json:"CloudWatchLoggingOptionDescriptions"`
}
