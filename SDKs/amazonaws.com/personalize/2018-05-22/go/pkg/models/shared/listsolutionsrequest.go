package shared

type ListSolutionsRequest struct {
	DatasetGroupArn *string `json:"datasetGroupArn,omitempty"`
	MaxResults      *int64  `json:"maxResults,omitempty"`
	NextToken       *string `json:"nextToken,omitempty"`
}
