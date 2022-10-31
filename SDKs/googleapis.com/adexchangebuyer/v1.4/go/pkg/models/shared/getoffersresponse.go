package shared

type GetOffersResponse struct {
	Products []Product `json:"products,omitempty"`
}
