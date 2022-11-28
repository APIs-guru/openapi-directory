package shared

// SQLApplicationConfigurationUpdate
// Describes updates to the input streams, destination streams, and reference data sources for a SQL-based Kinesis Data Analytics application.
type SQLApplicationConfigurationUpdate struct {
	InputUpdates               []InputUpdate               `json:"InputUpdates,omitempty"`
	OutputUpdates              []OutputUpdate              `json:"OutputUpdates,omitempty"`
	ReferenceDataSourceUpdates []ReferenceDataSourceUpdate `json:"ReferenceDataSourceUpdates,omitempty"`
}
