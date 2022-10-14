package shared

type DealersResponse struct {
	Dealers  []Dealer `json:"dealers,omitempty"`
	NumFound *int64   `json:"num_found,omitempty"`
}
