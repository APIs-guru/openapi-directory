package shared

// SQLApplicationConfigurationDescription
// Describes the inputs, outputs, and reference data sources for a SQL-based Kinesis Data Analytics application.
type SQLApplicationConfigurationDescription struct {
	InputDescriptions               []InputDescription               `json:"InputDescriptions,omitempty"`
	OutputDescriptions              []OutputDescription              `json:"OutputDescriptions,omitempty"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions,omitempty"`
}
