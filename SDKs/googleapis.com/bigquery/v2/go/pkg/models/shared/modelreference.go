package shared

type ModelReference struct {
	DatasetID *string `json:"datasetId"`
	ModelID   *string `json:"modelId"`
	ProjectID *string `json:"projectId"`
}
