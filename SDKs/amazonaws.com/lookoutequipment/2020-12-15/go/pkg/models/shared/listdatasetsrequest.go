package shared

type ListDatasetsRequest struct {
	DatasetNameBeginsWith *string `json:"DatasetNameBeginsWith"`
	MaxResults            *int64  `json:"MaxResults"`
	NextToken             *string `json:"NextToken"`
}
