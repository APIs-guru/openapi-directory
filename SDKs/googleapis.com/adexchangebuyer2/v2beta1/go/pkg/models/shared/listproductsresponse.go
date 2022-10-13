package shared

type ListProductsResponse struct {
	NextPageToken *string   `json:"nextPageToken"`
	Products      []Product `json:"products"`
}
