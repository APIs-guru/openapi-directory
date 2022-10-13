package shared

type SQLApplicationConfigurationDescription struct {
	InputDescriptions               []InputDescription               `json:"InputDescriptions"`
	OutputDescriptions              []OutputDescription              `json:"OutputDescriptions"`
	ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions"`
}
