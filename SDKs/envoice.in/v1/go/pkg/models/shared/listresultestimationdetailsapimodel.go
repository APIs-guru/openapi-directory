package shared

type ListResultEstimationDetailsAPIModel struct {
	Count         *int32                      `json:"Count"`
	ErrorMessages []IErrorInfo                `json:"ErrorMessages"`
	IsFaulted     *bool                       `json:"IsFaulted"`
	Result        []EstimationDetailsAPIModel `json:"Result"`
	TotalCount    *int32                      `json:"TotalCount"`
}
