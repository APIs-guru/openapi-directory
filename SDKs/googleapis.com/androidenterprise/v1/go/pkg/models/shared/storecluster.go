package shared

// StoreCluster
// Definition of a managed Google Play store cluster, a list of products displayed as part of a store page.
type StoreCluster struct {
	ID          *string         `json:"id,omitempty"`
	Name        []LocalizedText `json:"name,omitempty"`
	OrderInPage *string         `json:"orderInPage,omitempty"`
	ProductID   []string        `json:"productId,omitempty"`
}
