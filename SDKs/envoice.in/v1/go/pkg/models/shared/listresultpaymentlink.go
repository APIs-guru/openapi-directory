package shared

type ListResultPaymentLink struct {
	Count         *int32        `json:"Count"`
	ErrorMessages []IErrorInfo  `json:"ErrorMessages"`
	IsFaulted     *bool         `json:"IsFaulted"`
	Result        []PaymentLink `json:"Result"`
	TotalCount    *int32        `json:"TotalCount"`
}
