package shared

type DeleteApplicationCloudWatchLoggingOptionRequest struct {
	ApplicationName             string `json:"ApplicationName"`
	CloudWatchLoggingOptionID   string `json:"CloudWatchLoggingOptionId"`
	CurrentApplicationVersionID int64  `json:"CurrentApplicationVersionId"`
}
