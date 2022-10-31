package shared



type MetadataRecord struct {
    MetadataValues []Value `json:"metadataValues,omitempty"`
    Value *Value `json:"value,omitempty"`
    
}

