package shared

type SendCommandRequest struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig"`
	Comment                *string                 `json:"Comment"`
	DocumentHash           *string                 `json:"DocumentHash"`
	DocumentHashType       *DocumentHashTypeEnum   `json:"DocumentHashType"`
	DocumentName           string                  `json:"DocumentName"`
	DocumentVersion        *string                 `json:"DocumentVersion"`
	InstanceIds            []string                `json:"InstanceIds"`
	MaxConcurrency         *string                 `json:"MaxConcurrency"`
	MaxErrors              *string                 `json:"MaxErrors"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix"`
	OutputS3Region         *string                 `json:"OutputS3Region"`
	Parameters             map[string][]string     `json:"Parameters"`
	ServiceRoleArn         *string                 `json:"ServiceRoleArn"`
	Targets                []Target                `json:"Targets"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds"`
}
