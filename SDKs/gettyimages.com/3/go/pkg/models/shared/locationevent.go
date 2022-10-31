package shared

type LocationEvent struct {
	City          *string `json:"city,omitempty"`
	Country       *string `json:"country,omitempty"`
	StateProvince *string `json:"state_province,omitempty"`
	Venue         *string `json:"venue,omitempty"`
}
