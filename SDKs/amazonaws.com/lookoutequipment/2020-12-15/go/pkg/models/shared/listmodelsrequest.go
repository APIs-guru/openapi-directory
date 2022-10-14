package shared

type ListModelsRequest struct {
	DatasetNameBeginsWith *string          `json:"DatasetNameBeginsWith,omitempty"`
	MaxResults            *int64           `json:"MaxResults,omitempty"`
	ModelNameBeginsWith   *string          `json:"ModelNameBeginsWith,omitempty"`
	NextToken             *string          `json:"NextToken,omitempty"`
	Status                *ModelStatusEnum `json:"Status,omitempty"`
}
