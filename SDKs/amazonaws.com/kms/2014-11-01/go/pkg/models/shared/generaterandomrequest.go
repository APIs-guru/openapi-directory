package shared



type GenerateRandomRequest struct {
    CustomKeyStoreID *string `json:"CustomKeyStoreId,omitempty"`
    NumberOfBytes *int64 `json:"NumberOfBytes,omitempty"`
    
}

