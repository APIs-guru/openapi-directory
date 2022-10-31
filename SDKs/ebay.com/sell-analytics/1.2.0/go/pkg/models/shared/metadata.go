package shared



type Metadata struct {
    MetadataHeader *MetadataHeader `json:"metadataHeader,omitempty"`
    MetadataRecords []MetadataRecord `json:"metadataRecords,omitempty"`
    
}

