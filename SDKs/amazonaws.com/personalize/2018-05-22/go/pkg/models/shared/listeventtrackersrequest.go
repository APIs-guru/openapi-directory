package shared

type ListEventTrackersRequest struct {
	DatasetGroupArn *string `json:"datasetGroupArn"`
	MaxResults      *int64  `json:"maxResults"`
	NextToken       *string `json:"nextToken"`
}
