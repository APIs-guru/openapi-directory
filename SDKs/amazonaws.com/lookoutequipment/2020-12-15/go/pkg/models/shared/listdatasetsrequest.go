package shared

type ListDatasetsRequest struct {
	DatasetNameBeginsWith *string `json:"DatasetNameBeginsWith,omitempty"`
	MaxResults            *int64  `json:"MaxResults,omitempty"`
	NextToken             *string `json:"NextToken,omitempty"`
}
