package shared



type TableReference struct {
    DatasetID *string `json:"datasetId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    TableID *string `json:"tableId,omitempty"`
    
}

