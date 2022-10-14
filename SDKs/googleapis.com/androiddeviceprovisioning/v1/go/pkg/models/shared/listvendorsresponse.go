package shared

type ListVendorsResponse struct {
	NextPageToken *string   `json:"nextPageToken,omitempty"`
	TotalSize     *int32    `json:"totalSize,omitempty"`
	Vendors       []Company `json:"vendors,omitempty"`
}
