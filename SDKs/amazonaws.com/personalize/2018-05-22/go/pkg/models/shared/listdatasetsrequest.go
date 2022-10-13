package shared

type ListDatasetsRequest struct {
	DatasetGroupArn *string `json:"datasetGroupArn"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
}
