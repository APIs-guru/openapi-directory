package shared

type ListModelsRequest struct {
	DatasetNameBeginsWith *string          `json:"DatasetNameBeginsWith"`
	MaxResults            *int64           `json:"MaxResults"`
	ModelNameBeginsWith   *string          `json:"ModelNameBeginsWith"`
	NextToken             *string          `json:"NextToken"`
	Status                *ModelStatusEnum `json:"Status"`
}
