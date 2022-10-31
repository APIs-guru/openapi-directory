package shared



type StoreCluster struct {
    ID *string `json:"id,omitempty"`
    Name []LocalizedText `json:"name,omitempty"`
    OrderInPage *string `json:"orderInPage,omitempty"`
    ProductID []string `json:"productId,omitempty"`
    
}

