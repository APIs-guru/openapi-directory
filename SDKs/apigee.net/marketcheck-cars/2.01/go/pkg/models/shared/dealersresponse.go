package shared

type DealersResponse struct {
	Dealers  []Dealer `json:"dealers"`
	NumFound *int64   `json:"num_found"`
}
