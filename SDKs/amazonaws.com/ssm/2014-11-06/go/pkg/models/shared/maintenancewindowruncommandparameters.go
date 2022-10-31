package shared



type MaintenanceWindowRunCommandParameters struct {
    CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
    Comment *string `json:"Comment,omitempty"`
    DocumentHash *string `json:"DocumentHash,omitempty"`
    DocumentHashType *DocumentHashTypeEnum `json:"DocumentHashType,omitempty"`
    DocumentVersion *string `json:"DocumentVersion,omitempty"`
    NotificationConfig *NotificationConfig `json:"NotificationConfig,omitempty"`
    OutputS3BucketName *string `json:"OutputS3BucketName,omitempty"`
    OutputS3KeyPrefix *string `json:"OutputS3KeyPrefix,omitempty"`
    Parameters map[string][]string `json:"Parameters,omitempty"`
    ServiceRoleArn *string `json:"ServiceRoleArn,omitempty"`
    TimeoutSeconds *int64 `json:"TimeoutSeconds,omitempty"`
    
}

