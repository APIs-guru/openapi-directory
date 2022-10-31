package shared



type SQLApplicationConfigurationDescription struct {
    InputDescriptions []InputDescription `json:"InputDescriptions,omitempty"`
    OutputDescriptions []OutputDescription `json:"OutputDescriptions,omitempty"`
    ReferenceDataSourceDescriptions []ReferenceDataSourceDescription `json:"ReferenceDataSourceDescriptions,omitempty"`
    
}

