package shared

type TableReference struct {
	DatasetID *string `json:"datasetId"`
	ProjectID *string `json:"projectId"`
	TableID   *string `json:"tableId"`
}
