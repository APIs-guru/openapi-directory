package shared

type AwsRdsPendingCloudWatchLogsExports struct {
	LogTypesToDisable []string `json:"LogTypesToDisable"`
	LogTypesToEnable  []string `json:"LogTypesToEnable"`
}
