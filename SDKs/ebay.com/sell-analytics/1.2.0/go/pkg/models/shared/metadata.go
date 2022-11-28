package shared

// Metadata
// Type the defines the metadata information of the report. This includes the headers and the individual metadata records.
type Metadata struct {
	MetadataHeader  *MetadataHeader  `json:"metadataHeader,omitempty"`
	MetadataRecords []MetadataRecord `json:"metadataRecords,omitempty"`
}
