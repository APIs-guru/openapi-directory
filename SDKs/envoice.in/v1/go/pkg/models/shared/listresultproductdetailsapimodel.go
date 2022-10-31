package shared

type ListResultProductDetailsAPIModel struct {
	Count         *int32                   `json:"Count,omitempty"`
	ErrorMessages []IErrorInfo             `json:"ErrorMessages,omitempty"`
	IsFaulted     *bool                    `json:"IsFaulted,omitempty"`
	Result        []ProductDetailsAPIModel `json:"Result,omitempty"`
	TotalCount    *int32                   `json:"TotalCount,omitempty"`
}
