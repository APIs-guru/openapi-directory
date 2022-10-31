package shared

type PageResultCashReceiptQueryDto struct {
	Count        *int64                `json:"Count,omitempty"`
	Items        []CashReceiptQueryDto `json:"Items,omitempty"`
	NextPageLink *string               `json:"NextPageLink,omitempty"`
}
