package shared

type ListDatasetImportJobsRequest struct {
	DatasetArn *string `json:"datasetArn,omitempty"`
	MaxResults *int64  `json:"maxResults,omitempty"`
	NextToken  *string `json:"nextToken,omitempty"`
}
