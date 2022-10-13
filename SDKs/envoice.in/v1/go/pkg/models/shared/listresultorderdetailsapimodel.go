package shared

type ListResultOrderDetailsAPIModel struct {
	Count         *int32                 `json:"Count"`
	ErrorMessages []IErrorInfo           `json:"ErrorMessages"`
	IsFaulted     *bool                  `json:"IsFaulted"`
	Result        []OrderDetailsAPIModel `json:"Result"`
	TotalCount    *int32                 `json:"TotalCount"`
}
