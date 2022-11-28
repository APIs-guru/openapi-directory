package shared

// CustomDataIdentifiers
// Provides information about custom data identifiers that produced a sensitive data finding, and the number of occurrences of the data that they detected for the finding.
type CustomDataIdentifiers struct {
	Detections []CustomDetection `json:"detections,omitempty"`
	TotalCount *int64            `json:"totalCount,omitempty"`
}
