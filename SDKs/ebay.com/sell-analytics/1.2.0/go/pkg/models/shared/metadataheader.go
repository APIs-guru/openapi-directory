package shared

// MetadataHeader
// Type that defines the metadata header fields.
type MetadataHeader struct {
	Key          *string      `json:"key,omitempty"`
	MetadataKeys []Definition `json:"metadataKeys,omitempty"`
}
