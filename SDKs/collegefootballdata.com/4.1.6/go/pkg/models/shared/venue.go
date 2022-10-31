package shared



type VenueLocation struct {
    X *float64 `json:"x,omitempty"`
    Y *float64 `json:"y,omitempty"`
    
}

type Venue struct {
    Capacity *int64 `json:"capacity,omitempty"`
    City *string `json:"city,omitempty"`
    CountryCode *string `json:"country_code,omitempty"`
    Dome *bool `json:"dome,omitempty"`
    Elevation *float64 `json:"elevation,omitempty"`
    Grass *bool `json:"grass,omitempty"`
    ID *int64 `json:"id,omitempty"`
    Location *VenueLocation `json:"location,omitempty"`
    Name *string `json:"name,omitempty"`
    State *string `json:"state,omitempty"`
    Timezone *string `json:"timezone,omitempty"`
    Year *int64 `json:"year,omitempty"`
    Zip *string `json:"zip,omitempty"`
    
}

