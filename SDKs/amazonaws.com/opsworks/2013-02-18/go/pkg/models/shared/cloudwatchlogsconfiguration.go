package shared

type CloudWatchLogsConfiguration struct {
	Enabled    *bool                     `json:"Enabled"`
	LogStreams []CloudWatchLogsLogStream `json:"LogStreams"`
}
