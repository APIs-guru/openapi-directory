package shared

type ListSolutionsRequest struct {
	DatasetGroupArn *string `json:"datasetGroupArn"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
}
