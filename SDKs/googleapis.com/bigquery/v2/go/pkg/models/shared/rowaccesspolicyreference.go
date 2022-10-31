package shared



type RowAccessPolicyReference struct {
    DatasetID *string `json:"datasetId,omitempty"`
    PolicyID *string `json:"policyId,omitempty"`
    ProjectID *string `json:"projectId,omitempty"`
    TableID *string `json:"tableId,omitempty"`
    
}

