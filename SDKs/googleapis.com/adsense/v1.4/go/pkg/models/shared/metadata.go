package shared



type Metadata struct {
    Items []ReportingMetadataEntry `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    
}

