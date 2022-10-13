package shared

type CloudWatchLogsDestination struct {
	IamRoleArn  *string `json:"IamRoleArn"`
	LogGroupArn *string `json:"LogGroupArn"`
}
