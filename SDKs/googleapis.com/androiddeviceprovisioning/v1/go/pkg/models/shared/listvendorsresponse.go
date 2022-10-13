package shared

type ListVendorsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	TotalSize     *int32    `json:"totalSize"`
	Vendors       []Company `json:"vendors"`
}
