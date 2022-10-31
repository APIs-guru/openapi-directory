package shared



type DescribeCustomKeyStoresRequest struct {
    CustomKeyStoreID *string `json:"CustomKeyStoreId,omitempty"`
    CustomKeyStoreName *string `json:"CustomKeyStoreName,omitempty"`
    Limit *int64 `json:"Limit,omitempty"`
    Marker *string `json:"Marker,omitempty"`
    
}

