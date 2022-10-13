package shared

type ListDataIngestionJobsRequest struct {
	DatasetName *string                 `json:"DatasetName"`
	MaxResults  *int64                  `json:"MaxResults"`
	NextToken   *string                 `json:"NextToken"`
	Status      *IngestionJobStatusEnum `json:"Status"`
}
