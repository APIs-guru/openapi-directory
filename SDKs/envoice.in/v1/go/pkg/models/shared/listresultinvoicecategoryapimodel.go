package shared

type ListResultInvoiceCategoryAPIModel struct {
	Count         *int32                    `json:"Count"`
	ErrorMessages []IErrorInfo              `json:"ErrorMessages"`
	IsFaulted     *bool                     `json:"IsFaulted"`
	Result        []InvoiceCategoryAPIModel `json:"Result"`
	TotalCount    *int32                    `json:"TotalCount"`
}
