package shared



type AddApplicationCloudWatchLoggingOptionRequest struct {
    ApplicationName string `json:"ApplicationName"`
    CloudWatchLoggingOption CloudWatchLoggingOption `json:"CloudWatchLoggingOption"`
    CurrentApplicationVersionID int64 `json:"CurrentApplicationVersionId"`
    
}

