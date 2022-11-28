package shared

// RestoreStatus
// Describes the status of a cluster restore action. Returns null if the cluster was not created by restoring a snapshot.
type RestoreStatus struct {
	CurrentRestoreRateInMegaBytesPerSecond *float64
	ElapsedTimeInSeconds                   *int64
	EstimatedTimeToCompletionInSeconds     *int64
	ProgressInMegaBytes                    *int64
	SnapshotSizeInMegaBytes                *int64
	Status                                 *string
}
