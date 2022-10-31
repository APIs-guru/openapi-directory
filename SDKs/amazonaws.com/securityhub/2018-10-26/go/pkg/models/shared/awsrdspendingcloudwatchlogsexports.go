package shared

type AwsRdsPendingCloudWatchLogsExports struct {
	LogTypesToDisable []string `json:"LogTypesToDisable,omitempty"`
	LogTypesToEnable  []string `json:"LogTypesToEnable,omitempty"`
}
