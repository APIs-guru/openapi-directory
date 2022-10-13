package shared

type DescribeCustomKeyStoresResponse struct {
	CustomKeyStores []CustomKeyStoresListEntry `json:"CustomKeyStores"`
	NextMarker      *string                    `json:"NextMarker"`
	Truncated       *bool                      `json:"Truncated"`
}
