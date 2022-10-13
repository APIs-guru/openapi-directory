package shared

type MaintenanceWindowRunCommandParameters struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig"`
	Comment                *string                 `json:"Comment"`
	DocumentHash           *string                 `json:"DocumentHash"`
	DocumentHashType       *DocumentHashTypeEnum   `json:"DocumentHashType"`
	DocumentVersion        *string                 `json:"DocumentVersion"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix"`
	Parameters             map[string][]string     `json:"Parameters"`
	ServiceRoleArn         *string                 `json:"ServiceRoleArn"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds"`
}
