package shared

type StoreCluster struct {
	ID          *string         `json:"id"`
	Name        []LocalizedText `json:"name"`
	OrderInPage *string         `json:"orderInPage"`
	ProductID   []string        `json:"productId"`
}
