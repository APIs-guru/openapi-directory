package shared

type ListResultProductDetailsAPIModel struct {
	Count         *int32                   `json:"Count"`
	ErrorMessages []IErrorInfo             `json:"ErrorMessages"`
	IsFaulted     *bool                    `json:"IsFaulted"`
	Result        []ProductDetailsAPIModel `json:"Result"`
	TotalCount    *int32                   `json:"TotalCount"`
}
