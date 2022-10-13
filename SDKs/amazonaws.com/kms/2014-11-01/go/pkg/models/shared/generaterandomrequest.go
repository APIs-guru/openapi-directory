package shared

type GenerateRandomRequest struct {
	CustomKeyStoreID *string `json:"CustomKeyStoreId"`
	NumberOfBytes    *int64  `json:"NumberOfBytes"`
}
