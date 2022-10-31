package shared

type CreateDatasetResponse struct {
	DatasetArn  *string            `json:"DatasetArn,omitempty"`
	DatasetName *string            `json:"DatasetName,omitempty"`
	Status      *DatasetStatusEnum `json:"Status,omitempty"`
}
