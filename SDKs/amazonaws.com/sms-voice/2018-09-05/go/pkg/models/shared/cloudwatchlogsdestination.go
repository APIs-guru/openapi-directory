package shared

type CloudWatchLogsDestination struct {
	IamRoleArn  *string `json:"IamRoleArn,omitempty"`
	LogGroupArn *string `json:"LogGroupArn,omitempty"`
}
