package shared

type Report struct {
	DimensionMetadata []Metadata `json:"dimensionMetadata"`
	EndDate           *string    `json:"endDate"`
	Header            *Header    `json:"header"`
	LastUpdatedDate   *string    `json:"lastUpdatedDate"`
	Records           []Record   `json:"records"`
	StartDate         *string    `json:"startDate"`
	Warnings          []Error    `json:"warnings"`
}
