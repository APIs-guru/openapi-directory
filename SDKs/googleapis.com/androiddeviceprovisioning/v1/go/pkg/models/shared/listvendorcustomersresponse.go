package shared

type ListVendorCustomersResponse struct {
	Customers     []Company `json:"customers"`
	NextPageToken *string   `json:"nextPageToken"`
	TotalSize     *int32    `json:"totalSize"`
}
