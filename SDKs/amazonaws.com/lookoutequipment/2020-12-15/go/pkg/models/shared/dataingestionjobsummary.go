package shared

type DataIngestionJobSummary struct {
	DatasetArn                  *string                      `json:"DatasetArn,omitempty"`
	DatasetName                 *string                      `json:"DatasetName,omitempty"`
	IngestionInputConfiguration *IngestionInputConfiguration `json:"IngestionInputConfiguration,omitempty"`
	JobID                       *string                      `json:"JobId,omitempty"`
	Status                      *IngestionJobStatusEnum      `json:"Status,omitempty"`
}
