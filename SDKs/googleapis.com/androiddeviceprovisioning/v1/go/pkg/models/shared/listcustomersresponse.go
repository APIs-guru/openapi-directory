package shared

type ListCustomersResponse struct {
	Customers     []Company `json:"customers,omitempty"`
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	TotalSize     *int32    `json:"totalSize,omitempty"`
}
