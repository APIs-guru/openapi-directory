package shared

type ListInferenceSchedulersRequest struct {
	InferenceSchedulerNameBeginsWith *string `json:"InferenceSchedulerNameBeginsWith"`
	MaxResults                       *int64  `json:"MaxResults"`
	ModelName                        *string `json:"ModelName"`
	NextToken                        *string `json:"NextToken"`
}
