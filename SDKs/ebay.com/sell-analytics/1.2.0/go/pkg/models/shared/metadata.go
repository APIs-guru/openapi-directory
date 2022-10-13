package shared

type Metadata struct {
	MetadataHeader  *MetadataHeader  `json:"metadataHeader"`
	MetadataRecords []MetadataRecord `json:"metadataRecords"`
}
