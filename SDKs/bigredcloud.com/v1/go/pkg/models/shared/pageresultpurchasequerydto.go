package shared

type PageResultPurchaseQueryDto struct {
	Count        *int64             `json:"Count,omitempty"`
	Items        []PurchaseQueryDto `json:"Items,omitempty"`
	NextPageLink *string            `json:"NextPageLink,omitempty"`
}
