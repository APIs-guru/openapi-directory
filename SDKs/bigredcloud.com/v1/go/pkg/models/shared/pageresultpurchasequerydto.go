package shared

type PageResultPurchaseQueryDto struct {
	Count        *int64             `json:"Count"`
	Items        []PurchaseQueryDto `json:"Items"`
	NextPageLink *string            `json:"NextPageLink"`
}
