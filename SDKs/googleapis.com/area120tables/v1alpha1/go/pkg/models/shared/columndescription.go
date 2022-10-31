package shared



type ColumnDescription struct {
    DataType *string `json:"dataType,omitempty"`
    DateDetails *DateDetails `json:"dateDetails,omitempty"`
    ID *string `json:"id,omitempty"`
    Labels []LabeledItem `json:"labels,omitempty"`
    LookupDetails *LookupDetails `json:"lookupDetails,omitempty"`
    MultipleValuesDisallowed *bool `json:"multipleValuesDisallowed,omitempty"`
    Name *string `json:"name,omitempty"`
    Readonly *bool `json:"readonly,omitempty"`
    RelationshipDetails *RelationshipDetails `json:"relationshipDetails,omitempty"`
    
}

