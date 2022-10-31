package shared



type IndexUnusedReason struct {
    BaseTable *TableReference `json:"base_table,omitempty"`
    Code *string `json:"code,omitempty"`
    IndexName *string `json:"index_name,omitempty"`
    Message *string `json:"message,omitempty"`
    
}

