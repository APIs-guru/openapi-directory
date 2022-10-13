package shared

type MetadataHeader struct {
	Key          *string      `json:"key"`
	MetadataKeys []Definition `json:"metadataKeys"`
}
