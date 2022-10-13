package shared

type ListFiltersRequest struct {
	DatasetGroupArn *string `json:"datasetGroupArn"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
}
