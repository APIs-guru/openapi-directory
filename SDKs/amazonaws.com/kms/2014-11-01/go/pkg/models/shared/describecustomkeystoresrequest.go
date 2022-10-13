package shared

type DescribeCustomKeyStoresRequest struct {
	CustomKeyStoreID   *string `json:"CustomKeyStoreId"`
	CustomKeyStoreName *string `json:"CustomKeyStoreName"`
	Limit              *int64  `json:"Limit"`
	Marker             *string `json:"Marker"`
}
