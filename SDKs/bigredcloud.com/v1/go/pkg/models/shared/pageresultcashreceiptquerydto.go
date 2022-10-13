package shared

type PageResultCashReceiptQueryDto struct {
	Count        *int64                `json:"Count"`
	Items        []CashReceiptQueryDto `json:"Items"`
	NextPageLink *string               `json:"NextPageLink"`
}
