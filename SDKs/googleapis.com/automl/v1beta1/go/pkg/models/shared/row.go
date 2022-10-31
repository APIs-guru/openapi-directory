package shared



type Row struct {
    ColumnSpecIds []string `json:"columnSpecIds,omitempty"`
    Values []interface{} `json:"values,omitempty"`
    
}

