package shared

type PageResultPaymentQueryDto struct {
	Count        *int64            `json:"Count"`
	Items        []PaymentQueryDto `json:"Items"`
	NextPageLink *string           `json:"NextPageLink"`
}
