package shared

// DataSource
// Describes an app's data source.
type DataSource struct {
	Arn          *string `json:"Arn,omitempty"`
	DatabaseName *string `json:"DatabaseName,omitempty"`
	Type         *string `json:"Type,omitempty"`
}
