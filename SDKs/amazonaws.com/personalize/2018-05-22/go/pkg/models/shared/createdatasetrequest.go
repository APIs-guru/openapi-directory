package shared

type CreateDatasetRequest struct {
	DatasetGroupArn string `json:"datasetGroupArn"`
	DatasetType     string `json:"datasetType"`
	Name            string `json:"name"`
	SchemaArn       string `json:"schemaArn"`
}
