package shared

type ListInferenceSchedulersRequest struct {
	InferenceSchedulerNameBeginsWith *string `json:"InferenceSchedulerNameBeginsWith,omitempty"`
	MaxResults                       *int64  `json:"MaxResults,omitempty"`
	ModelName                        *string `json:"ModelName,omitempty"`
	NextToken                        *string `json:"NextToken,omitempty"`
}
