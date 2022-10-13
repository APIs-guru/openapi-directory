package shared

type ListCustomersResponse struct {
	Customers     []Company `json:"customers"`
	NextPageToken *string   `json:"nextPageToken"`
	TotalSize     *int32    `json:"totalSize"`
}
