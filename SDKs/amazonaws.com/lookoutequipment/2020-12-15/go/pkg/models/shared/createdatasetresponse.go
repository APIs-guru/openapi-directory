package shared

type CreateDatasetResponse struct {
	DatasetArn  *string            `json:"DatasetArn"`
	DatasetName *string            `json:"DatasetName"`
	Status      *DatasetStatusEnum `json:"Status"`
}
