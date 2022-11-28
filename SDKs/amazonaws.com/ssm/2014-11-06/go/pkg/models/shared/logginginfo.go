package shared

// LoggingInfo
// <p>Information about an Amazon Simple Storage Service (Amazon S3) bucket to write instance-level logs to.</p> <note> <p> <code>LoggingInfo</code> has been deprecated. To specify an Amazon Simple Storage Service (Amazon S3) bucket to contain logs, instead use the <code>OutputS3BucketName</code> and <code>OutputS3KeyPrefix</code> options in the <code>TaskInvocationParameters</code> structure. For information about how Amazon Web Services Systems Manager handles these options for the supported maintenance window task types, see <a>MaintenanceWindowTaskInvocationParameters</a>.</p> </note>
type LoggingInfo struct {
	S3BucketName string  `json:"S3BucketName"`
	S3KeyPrefix  *string `json:"S3KeyPrefix,omitempty"`
	S3Region     string  `json:"S3Region"`
}
