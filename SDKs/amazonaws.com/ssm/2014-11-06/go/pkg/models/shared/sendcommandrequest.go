package shared

type SendCommandRequest struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
	Comment                *string                 `json:"Comment,omitempty"`
	DocumentHash           *string                 `json:"DocumentHash,omitempty"`
	DocumentHashType       *DocumentHashTypeEnum   `json:"DocumentHashType,omitempty"`
	DocumentName           string                  `json:"DocumentName"`
	DocumentVersion        *string                 `json:"DocumentVersion,omitempty"`
	InstanceIds            []string                `json:"InstanceIds,omitempty"`
	MaxConcurrency         *string                 `json:"MaxConcurrency,omitempty"`
	MaxErrors              *string                 `json:"MaxErrors,omitempty"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig,omitempty"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName,omitempty"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix,omitempty"`
	OutputS3Region         *string                 `json:"OutputS3Region,omitempty"`
	Parameters             map[string][]string     `json:"Parameters,omitempty"`
	ServiceRoleArn         *string                 `json:"ServiceRoleArn,omitempty"`
	Targets                []Target                `json:"Targets,omitempty"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds,omitempty"`
}
