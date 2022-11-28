package shared

// SQLApplicationConfiguration
// Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
type SQLApplicationConfiguration struct {
	Inputs               []Input               `json:"Inputs,omitempty"`
	Outputs              []Output              `json:"Outputs,omitempty"`
	ReferenceDataSources []ReferenceDataSource `json:"ReferenceDataSources,omitempty"`
}
