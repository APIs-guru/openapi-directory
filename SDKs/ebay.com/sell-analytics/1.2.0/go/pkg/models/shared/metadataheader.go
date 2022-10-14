package shared

type MetadataHeader struct {
	Key          *string      `json:"key,omitempty"`
	MetadataKeys []Definition `json:"metadataKeys,omitempty"`
}
