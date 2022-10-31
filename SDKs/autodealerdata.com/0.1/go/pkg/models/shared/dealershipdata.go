package shared

type DealershipData struct {
	Address    string  `json:"address"`
	DealerName string  `json:"dealerName"`
	Ids        []int64 `json:"ids"`
	State      string  `json:"state"`
	ZipCode    int64   `json:"zipCode"`
}
