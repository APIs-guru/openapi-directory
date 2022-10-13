package shared

type MetadataRecord struct {
	MetadataValues []Value `json:"metadataValues"`
	Value          *Value  `json:"value"`
}
