package shared

// Report
// The complex type that defines that defines the report.
type Report struct {
	DimensionMetadata []Metadata `json:"dimensionMetadata,omitempty"`
	EndDate           *string    `json:"endDate,omitempty"`
	Header            *Header    `json:"header,omitempty"`
	LastUpdatedDate   *string    `json:"lastUpdatedDate,omitempty"`
	Records           []Record   `json:"records,omitempty"`
	StartDate         *string    `json:"startDate,omitempty"`
	Warnings          []Error    `json:"warnings,omitempty"`
}
