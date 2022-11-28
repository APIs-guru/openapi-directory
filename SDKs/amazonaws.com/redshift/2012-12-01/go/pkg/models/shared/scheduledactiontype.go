package shared

// ScheduledActionType
// The action type that specifies an Amazon Redshift API operation that is supported by the Amazon Redshift scheduler.
type ScheduledActionType struct {
	PauseCluster  *PauseClusterMessage
	ResizeCluster *ResizeClusterMessage
	ResumeCluster *ResumeClusterMessage
}
