package shared

type Location struct {
	Address *string `json:"address"`
	City    *string `json:"city"`
	Lat     *string `json:"lat"`
	Lon     *string `json:"lon"`
	State   *string `json:"state"`
	Zip     *string `json:"zip"`
}
