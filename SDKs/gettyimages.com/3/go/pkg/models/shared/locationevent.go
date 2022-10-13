package shared

type LocationEvent struct {
	City          *string `json:"city"`
	Country       *string `json:"country"`
	StateProvince *string `json:"state_province"`
	Venue         *string `json:"venue"`
}
