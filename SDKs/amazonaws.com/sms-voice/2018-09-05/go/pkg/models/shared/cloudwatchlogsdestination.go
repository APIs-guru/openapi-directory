package shared

// CloudWatchLogsDestination
// An object that contains information about an event destination that sends data to Amazon CloudWatch Logs.
type CloudWatchLogsDestination struct {
	IamRoleArn  *string `json:"IamRoleArn,omitempty"`
	LogGroupArn *string `json:"LogGroupArn,omitempty"`
}
