package shared

type CreateDatasetExportJobRequest struct {
	DatasetArn    string                 `json:"datasetArn"`
	IngestionMode *IngestionModeEnum     `json:"ingestionMode"`
	JobName       string                 `json:"jobName"`
	JobOutput     DatasetExportJobOutput `json:"jobOutput"`
	RoleArn       string                 `json:"roleArn"`
}
