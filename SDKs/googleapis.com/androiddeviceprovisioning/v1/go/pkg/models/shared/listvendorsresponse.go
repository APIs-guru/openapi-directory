package shared

// ListVendorsResponse
// Response message to list vendors of the partner.
type ListVendorsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	TotalSize     *int32    `json:"totalSize,omitempty"`
	Vendors       []Company `json:"vendors,omitempty"`
}
