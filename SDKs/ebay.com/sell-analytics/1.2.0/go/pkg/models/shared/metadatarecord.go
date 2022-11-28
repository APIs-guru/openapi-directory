package shared

// MetadataRecord
// A complex type that defines the data records returned in the report.
type MetadataRecord struct {
	MetadataValues []Value `json:"metadataValues,omitempty"`
	Value          *Value  `json:"value,omitempty"`
}
