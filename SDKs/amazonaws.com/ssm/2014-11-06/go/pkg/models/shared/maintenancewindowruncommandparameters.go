package shared

// MaintenanceWindowRunCommandParameters
// <p>The parameters for a <code>RUN_COMMAND</code> task type.</p> <p>For information about specifying and updating task parameters, see <a>RegisterTaskWithMaintenanceWindow</a> and <a>UpdateMaintenanceWindowTask</a>.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p> <code>TaskParameters</code> has been deprecated. To specify parameters to pass to a task when it runs, instead use the <code>Parameters</code> option in the <code>TaskInvocationParameters</code> structure. For information about how Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> <p>For <code>RUN_COMMAND</code> tasks, Systems Manager uses specified values for <code>TaskParameters</code> and <code>LoggingInfo</code> only if no values are specified for <code>TaskInvocationParameters</code>. </p> </note>
type MaintenanceWindowRunCommandParameters struct {
	CloudWatchOutputConfig *CloudWatchOutputConfig `json:"CloudWatchOutputConfig,omitempty"`
	Comment                *string                 `json:"Comment,omitempty"`
	DocumentHash           *string                 `json:"DocumentHash,omitempty"`
	DocumentHashType       *DocumentHashTypeEnum   `json:"DocumentHashType,omitempty"`
	DocumentVersion        *string                 `json:"DocumentVersion,omitempty"`
	NotificationConfig     *NotificationConfig     `json:"NotificationConfig,omitempty"`
	OutputS3BucketName     *string                 `json:"OutputS3BucketName,omitempty"`
	OutputS3KeyPrefix      *string                 `json:"OutputS3KeyPrefix,omitempty"`
	Parameters             map[string][]string     `json:"Parameters,omitempty"`
	ServiceRoleArn         *string                 `json:"ServiceRoleArn,omitempty"`
	TimeoutSeconds         *int64                  `json:"TimeoutSeconds,omitempty"`
}
