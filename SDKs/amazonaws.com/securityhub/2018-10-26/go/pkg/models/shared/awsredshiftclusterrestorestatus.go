package shared

type AwsRedshiftClusterRestoreStatus struct {
	CurrentRestoreRateInMegaBytesPerSecond *float64 `json:"CurrentRestoreRateInMegaBytesPerSecond"`
	ElapsedTimeInSeconds                   *int64   `json:"ElapsedTimeInSeconds"`
	EstimatedTimeToCompletionInSeconds     *int64   `json:"EstimatedTimeToCompletionInSeconds"`
	ProgressInMegaBytes                    *int64   `json:"ProgressInMegaBytes"`
	SnapshotSizeInMegaBytes                *int64   `json:"SnapshotSizeInMegaBytes"`
	Status                                 *string  `json:"Status"`
}
