package shared

type PageResultCashPaymentQueryDto struct {
	Count        *int64                `json:"Count"`
	Items        []CashPaymentQueryDto `json:"Items"`
	NextPageLink *string               `json:"NextPageLink"`
}
