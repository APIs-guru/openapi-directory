package shared

type ListDatasetImportJobsRequest struct {
	DatasetArn *string `json:"datasetArn"`
	MaxResults *int64  `json:"maxResults"`
	NextToken  *string `json:"nextToken"`
}
