package shared

// DataTransferProgress
// Describes the status of a cluster while it is in the process of resizing with an incremental resize.
type DataTransferProgress struct {
	CurrentRateInMegaBytesPerSecond    *float64
	DataTransferredInMegaBytes         *int64
	ElapsedTimeInSeconds               *int64
	EstimatedTimeToCompletionInSeconds *int64
	Status                             *string
	TotalDataInMegaBytes               *int64
}
