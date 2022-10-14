package shared

type AwsRedshiftClusterRestoreStatus struct {
	CurrentRestoreRateInMegaBytesPerSecond *float64 `json:"CurrentRestoreRateInMegaBytesPerSecond,omitempty"`
	ElapsedTimeInSeconds                   *int64   `json:"ElapsedTimeInSeconds,omitempty"`
	EstimatedTimeToCompletionInSeconds     *int64   `json:"EstimatedTimeToCompletionInSeconds,omitempty"`
	ProgressInMegaBytes                    *int64   `json:"ProgressInMegaBytes,omitempty"`
	SnapshotSizeInMegaBytes                *int64   `json:"SnapshotSizeInMegaBytes,omitempty"`
	Status                                 *string  `json:"Status,omitempty"`
}
