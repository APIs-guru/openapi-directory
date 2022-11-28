package shared

// ResizeProgressMessage
// Describes the result of a cluster resize operation.
type ResizeProgressMessage struct {
	AvgResizeRateInMegaBytesPerSecond  *float64
	DataTransferProgressPercent        *float64
	ElapsedTimeInSeconds               *int64
	EstimatedTimeToCompletionInSeconds *int64
	ImportTablesCompleted              []string
	ImportTablesInProgress             []string
	ImportTablesNotStarted             []string
	Message                            *string
	ProgressInMegaBytes                *int64
	ResizeType                         *string
	Status                             *string
	TargetClusterType                  *string
	TargetEncryptionType               *string
	TargetNodeType                     *string
	TargetNumberOfNodes                *int64
	TotalResizeDataInMegaBytes         *int64
}
