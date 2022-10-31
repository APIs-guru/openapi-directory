package shared



type Columns struct {
    AttributeNames []string `json:"attributeNames,omitempty"`
    Etag *string `json:"etag,omitempty"`
    Items []Column `json:"items,omitempty"`
    Kind *string `json:"kind,omitempty"`
    TotalResults *int32 `json:"totalResults,omitempty"`
    
}

