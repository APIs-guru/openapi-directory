package shared

type VenueLocation struct {
	X *float64 `json:"x"`
	Y *float64 `json:"y"`
}

type Venue struct {
	Capacity    *int64         `json:"capacity"`
	City        *string        `json:"city"`
	CountryCode *string        `json:"country_code"`
	Dome        *bool          `json:"dome"`
	Elevation   *float64       `json:"elevation"`
	Grass       *bool          `json:"grass"`
	ID          *int64         `json:"id"`
	Location    *VenueLocation `json:"location"`
	Name        *string        `json:"name"`
	State       *string        `json:"state"`
	Timezone    *string        `json:"timezone"`
	Year        *int64         `json:"year"`
	Zip         *string        `json:"zip"`
}
