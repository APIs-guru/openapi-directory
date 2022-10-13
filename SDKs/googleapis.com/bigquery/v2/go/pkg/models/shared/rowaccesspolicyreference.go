package shared

type RowAccessPolicyReference struct {
	DatasetID *string `json:"datasetId"`
	PolicyID  *string `json:"policyId"`
	ProjectID *string `json:"projectId"`
	TableID   *string `json:"tableId"`
}
