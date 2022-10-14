package shared

type Location struct {
	Address *string `json:"address,omitempty"`
	City    *string `json:"city,omitempty"`
	Lat     *string `json:"lat,omitempty"`
	Lon     *string `json:"lon,omitempty"`
	State   *string `json:"state,omitempty"`
	Zip     *string `json:"zip,omitempty"`
}
