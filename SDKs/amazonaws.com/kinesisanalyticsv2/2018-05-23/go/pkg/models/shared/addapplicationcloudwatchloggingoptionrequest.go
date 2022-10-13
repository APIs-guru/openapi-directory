package shared

type AddApplicationCloudWatchLoggingOptionRequest struct {
	ApplicationName             string                  `json:"ApplicationName"`
	CloudWatchLoggingOption     CloudWatchLoggingOption `json:"CloudWatchLoggingOption"`
	ConditionalToken            *string                 `json:"ConditionalToken"`
	CurrentApplicationVersionID *int64                  `json:"CurrentApplicationVersionId"`
}
