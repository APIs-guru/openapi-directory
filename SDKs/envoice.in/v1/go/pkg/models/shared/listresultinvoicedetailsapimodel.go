package shared

type ListResultInvoiceDetailsAPIModel struct {
	Count         *int32                   `json:"Count"`
	ErrorMessages []IErrorInfo             `json:"ErrorMessages"`
	IsFaulted     *bool                    `json:"IsFaulted"`
	Result        []InvoiceDetailsAPIModel `json:"Result"`
	TotalCount    *int32                   `json:"TotalCount"`
}
