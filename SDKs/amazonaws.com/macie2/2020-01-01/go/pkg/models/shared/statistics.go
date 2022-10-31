package shared

type Statistics struct {
	ApproximateNumberOfObjectsToProcess *float64 `json:"approximateNumberOfObjectsToProcess,omitempty"`
	NumberOfRuns                        *float64 `json:"numberOfRuns,omitempty"`
}
