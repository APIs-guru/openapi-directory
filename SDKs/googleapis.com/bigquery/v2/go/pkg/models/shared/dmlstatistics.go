package shared



type DmlStatistics struct {
    DeletedRowCount *string `json:"deletedRowCount,omitempty"`
    InsertedRowCount *string `json:"insertedRowCount,omitempty"`
    UpdatedRowCount *string `json:"updatedRowCount,omitempty"`
    
}

