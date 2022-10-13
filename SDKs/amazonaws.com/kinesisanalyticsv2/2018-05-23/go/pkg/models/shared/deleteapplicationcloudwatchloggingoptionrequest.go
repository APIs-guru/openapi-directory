package shared

type DeleteApplicationCloudWatchLoggingOptionRequest struct {
	ApplicationName             string  `json:"ApplicationName"`
	CloudWatchLoggingOptionID   string  `json:"CloudWatchLoggingOptionId"`
	ConditionalToken            *string `json:"ConditionalToken"`
	CurrentApplicationVersionID *int64  `json:"CurrentApplicationVersionId"`
}
