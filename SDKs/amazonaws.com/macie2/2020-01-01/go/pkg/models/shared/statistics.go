package shared

// Statistics
// Provides processing statistics for a classification job.
type Statistics struct {
	ApproximateNumberOfObjectsToProcess *float64 `json:"approximateNumberOfObjectsToProcess,omitempty"`
	NumberOfRuns                        *float64 `json:"numberOfRuns,omitempty"`
}
