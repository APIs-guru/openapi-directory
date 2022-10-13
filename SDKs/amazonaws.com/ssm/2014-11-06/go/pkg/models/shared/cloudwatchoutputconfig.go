package shared

type CloudWatchOutputConfig struct {
	CloudWatchLogGroupName  *string `json:"CloudWatchLogGroupName"`
	CloudWatchOutputEnabled *bool   `json:"CloudWatchOutputEnabled"`
}
