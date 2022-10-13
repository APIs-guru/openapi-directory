package shared

type DataIngestionJobSummary struct {
	DatasetArn                  *string                      `json:"DatasetArn"`
	DatasetName                 *string                      `json:"DatasetName"`
	IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration"`
	JobID                       *string                      `json:"JobId"`
	Status                      *IngestionJobStatusEnum      `json:"Status"`
}
