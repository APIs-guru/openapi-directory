package shared



type DescribeCustomKeyStoresResponse struct {
    CustomKeyStores []CustomKeyStoresListEntry `json:"CustomKeyStores,omitempty"`
    NextMarker *string `json:"NextMarker,omitempty"`
    Truncated *bool `json:"Truncated,omitempty"`
    
}

