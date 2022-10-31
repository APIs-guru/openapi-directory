package shared

type PageResultPaymentQueryDto struct {
	Count        *int64            `json:"Count,omitempty"`
	Items        []PaymentQueryDto `json:"Items,omitempty"`
	NextPageLink *string           `json:"NextPageLink,omitempty"`
}
